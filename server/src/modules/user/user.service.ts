import { BadRequestException, ConflictException, ForbiddenException, GoneException, Injectable, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Response, response } from 'express';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import generateSecureOTP from 'src/helpers/generateSecureOTP';
import { where } from 'sequelize';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

interface user {
    sub: number, 
    name: number,
    username: string,
    email: string,
    iat: number,
    exp: number,
}

@Injectable()
export class UserService{

    private readonly salt = 10

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwtService: JwtService,
        private readonly mailService: MailerService,
        private configService: ConfigService
    ){}

    getTest(): {test: string} {
        return {test: "User route running"}
    }

    async createUser(name: string, email: string, password: string, role: string): Promise<User>{
        if (!name || !email || !password){
            throw new BadRequestException("Missing Required Field")
        }
        // Check if email already exists
        const existingUser = await this.userModel.findOne({where: { email }})
        if (existingUser){
            throw new ConflictException("Email already exist")
        }
        try {
            // Hash password
            const hashedPassword = await bcrypt.hash(password.toString(), this.salt)
            if (!hashedPassword){
                throw new Error("Error hashing password")
            }

            const result = await this.userModel.create({
                name,
                password: hashedPassword,
                email,
                role
            })

            return result

        }
        catch(error){
            console.error('Error during registration:', error);
            throw new InternalServerErrorException("Error creating user")
        }
    }

    async login(email: string, password: string): Promise<{code: number, token: string, role: string, id: number}> {
        if ( !email || !password ){
            throw new BadRequestException("Missing Required Field")
        }
        const userData = await this.userModel.findOne({where: { email }})
        if (!userData){
            throw new UnauthorizedException("Check Credentials")
        }
        const databasePassword = userData.dataValues.password
        try {
            const isPasswordValid = await bcrypt.compare(password, databasePassword )
            if (!isPasswordValid){
                throw new UnauthorizedException("Incorrect Password")
            }
            const role = userData.dataValues.role
            const id = userData.dataValues.id
            // Generate token
            const username = userData.dataValues.name
            const userID = userData.dataValues.id
            const payload = { sub: userID, username, email }
            const token = await this.jwtService.signAsync(payload)
            return {
                code: 200,
                token,
                role,
                id
            }
            
        } catch (error) {
            console.error(" /// Loggin Error /// ===> ", error)
            throw new UnauthorizedException("Error logging in")
        }
        
        
    }

    async logout(response: Response): Promise<{code: number, status: "success"}> {
         try {
            // Delete cookie from browser
            response.clearCookie('token')
            return {code: 200, status: 'success'}
        } catch (error) {
            console.error('Error logging out:', error);
            throw new InternalServerErrorException("Error logging out")
        } 
    }

    async contactUs(message: string, email: string, subject: string, name: string){
        try {
            this.mailService.sendMail({
              to: "info@aydaivf.com",
              bcc: "orhan.ozkilic@neareasttechnology.com",
              subject: subject,
              html: `<div> This mail is sent by ${name} <br/><br/> ${message} <br/><br/> Contact the sender from ${email}</div>`
            });
            return {message: "Success", status: 200}
          } catch (error) {
              console.error("Maill Error ===> ", error )
              throw new ServiceUnavailableException("Mail failed")
          }
    }

    async verifyMail (user: user,email: string ) {
        const otp = generateSecureOTP();
        const message = `<div> Hello,<br/> Your verifiation code is ${otp} <br/><br/> Return to the website to enter this code. If you no longer have the tab open, try the process again and recieve a new code. <br/><br/> Kind regards, <br/><br/> Aydaivf. </div> `;
        const userData = await this.userModel.findOne({where: { email: email }})
        if(!userData){
            throw new NotFoundException("User not found")
        }
        try {
            const hashedResetToken = await bcrypt.hash(otp.toString(), 10)
            if (hashedResetToken) {
                const reset_token = await userData.update({reset_token: hashedResetToken})
            }
        } catch (error) {
            console.error(`Error while creating otp ===> ${error}`)
            throw new InternalServerErrorException("Error resetting password")
            
        }

        try {
          this.mailService.sendMail({
            to: email,
            subject: `Reset Token`,
            html: message
          });
          return {message: "Success", status: 200}
        } catch (error) {
            console.error("Maill Error ===> ", error )
            throw new ServiceUnavailableException("Mail failed")
        }
    }

    async verifyToken (email: string, otp: number) :Promise<{message: string, code: number}> {
        const userData = await this.userModel.findOne({where: { email }})
        if(!userData){
            throw new NotFoundException("Error verifying email")
        }
        const databaseResetToken = userData.dataValues.reset_token
        try {
            const isResetTokenValid = await bcrypt.compare(otp.toString(), databaseResetToken )
            if (!isResetTokenValid){
                throw new ServiceUnavailableException("Incorrect OTP")
            }
            
        } catch (error) {
            console.error("OTP Error ===> ", error)
            throw new ServiceUnavailableException("OTP verification is down")
        }

        const expiryTime = new Date(userData.dataValues.updated_at).getTime() + 5 * 60 * 1000; // Checks for token expiration
        if (Date.now() > expiryTime) {
            console.error(" /// Token Expired ///")
            throw new ForbiddenException("Token expired")
        }       

        // const clearToken = await this.clearResetToken(user.sub)

        return {message: "OTP verification succeded", code: 200}
    }

    async clearResetToken(userId: number) {
        try {
          const result = await this.userModel.update(
            { reset_token: null }, // Set reset_token to NULL
            { where: { id: userId } } // Specify the user by ID
          );
      
          if (result[0] === 0) {
            console.log('No user found with the given ID.');
            return
          }
      
          console.log('Reset token cleared successfully.');
          return
        } catch (error) {
          console.error('Error clearing reset token:', error);
        }
    }
      

    
    async resetPassword( email: string, newPassword: string): Promise<{code: number, status: string}>{
        if ( !newPassword || !email ){
            throw new BadRequestException("Missing Required Field")
        }
        const userData = await this.userModel.findOne({where: { email }}) // checks if user is in the database
        if(!userData){
            console.error("Error")
            throw new NotFoundException("Error reseting password")
        }
        try { // if user is found, perform resetpassword logic
            const hashedNewPassword = await bcrypt.hash(newPassword.toString(), 10)
            if (hashedNewPassword) {
                const newPassword = await userData.update({password: hashedNewPassword}) // update password
                return {code: 200, status: 'password updated successfully'}
            }
        } catch (error) {
            console.error(`/// Error while resetting password ===> ${error} ///`)
            throw new InternalServerErrorException("Error resetting password")
        }
    }

    async getAll(){
        try {
            const users = await this.userModel.findAll({
                attributes: ['id', 'name', 'email', 'role', "avatar", 'created_at'],
            })
            return users
        } catch (error) {
            throw new InternalServerErrorException("Error getting data")
            
        }
    }

    async deleteAdmin(id: number){
        try {
            const result = await this.userModel.destroy({
              where: { id }, // Specify the condition
            });
      
            if (result === 0) {
              // No rows deleted
              throw new Error('Admin not found or already deleted');
            }
            console.log(`Admin with ID ${id} deleted successfully.`);
            return {status: 200, message: "Deleted Successfully"}
        } catch (error) {
            console.error('/// Error deleting admin:', error.message, " ///");
            throw error;
        }
    }

    async updateRole(id: number, role: string, user: any){
        const checkPermisson = await this.userModel.findOne({
            where: { id: user.sub }, 
        })
        if (checkPermisson.dataValues.role === "super-admin"){
            try {
                const userData = await this.userModel.findOne({
                  where: { id }, // Specify the condition
                });
                if (!userData){
                    throw new InternalServerErrorException("User Does not exist")
                }
                userData.update({role})
                return({status: 200, message: "Updated Successfully"})
            } catch (error) {
                console.error('/// Error updating admin role:', error.message, " ///");
                throw error;
            }
        }else{
            throw new UnauthorizedException("Unauthorized")
        }
    }

    async updateProfile(avatar: string, name: string, email: string, user: any){
        try {
            const checkPermission = await this.userModel.findOne({ // Check if user is in the database
              where: { id: user?.sub }, 
            });
            if (!checkPermission){
                throw new InternalServerErrorException("User Does not exist")
            }
            const checkMailConflict = await this.userModel.findOne({ // checks if email is already choosen
                where: { email }, // Specify the condition
            });

            if(checkMailConflict && checkMailConflict.dataValues.id !== user.sub) throw new ConflictException("Email belongs to a user, choose another")
        
            this.userModel.update({avatar, name, email}, {where: {id: user?.sub}}) // update data
            
            return({status: 200, message: "Updated Successfully"})
        
        } catch (error) {
            console.error('/// Error updating admin role:', error.message, " ///");
            throw error;
        }
    }

    async getProfile(user: any){
        try {
            const userData = await this.userModel.findOne({
                where: { id: user?.sub }, 
                attributes: ['avatar', 'name', 'email']
            });
            return userData
        } catch (error) {
            console.log("///", error, "///")
            throw new InternalServerErrorException("Error when getting profile")
        }
       
    }

    async verifyRecaptcha(token: string){
        const secretToken = this.configService.get<string>('env.recaptcha')
        
        const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretToken}&response=${token}`);
        const data = res.data
        if (data?.success){
            if (data.score < 0.5){
                return { status: 200, message: "bot"}
            }else if(data.score >= 0.5){
                return {status: 200, message: "human"}
            }
        }
        throw new InternalServerErrorException("Something went wrong")
    }
}