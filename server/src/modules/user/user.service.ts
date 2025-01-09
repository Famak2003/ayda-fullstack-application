import { BadRequestException, ConflictException, ForbiddenException, GoneException, Injectable, InternalServerErrorException, NotFoundException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Response, response } from 'express';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
import generateSecureOTP from 'src/helpers/generateSecureOTP';

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
    ){}

    getTest(): {test: string} {
        return {test: "User route running"}
    }

    async createUser(name: string, email: string, password: string): Promise<User>{
        if (!name || !email || !password){
            throw new BadRequestException("Missing Required Field")
        }
        // Check if email already exists
        const existingUser = await this.userModel.findOne({where: { email }})
        if (existingUser){
            throw new ConflictException("Email exist in the database")
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
                email
            })

            return result

        }
        catch(error){
            console.error('Error during registration:', error);
            throw new InternalServerErrorException("Error creating user")
        }
    }

    async login(email: string, password: string): Promise<{code: number, token: string}> {
        if ( !email || !password ){
            throw new BadRequestException("Missing Required Field")
        }
        const userData = await this.userModel.findOne({where: { email }})
        if (!userData){
            throw new UnauthorizedException("Unknown User")
        }
        const databasePassword = userData.dataValues.password
        try {
            const isPasswordValid = await bcrypt.compare(password, databasePassword )
            if (!isPasswordValid){
                throw new UnauthorizedException("Incorrect Password")
            }
            // Generate token
            const username = userData.dataValues.name
            const userID = userData.dataValues.id
            const payload = { sub: userID, username, email }
            const token = await this.jwtService.signAsync(payload)
            return {
                code: 200,
                token
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

    async verifyMail (user: user,email: string ) {
        const otp = generateSecureOTP();
        const message = `<p>Forgot your password? <br/> Here is your one time password ${otp} <br/><br/> If you didn't request for this mail, please ignore this email! </p>`;
        // console.log(user)
        const userData = await this.userModel.findOne({where: { email: user.email }})
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

    async verifyToken (user: user, otp: number) :Promise<{message: string, code: number}> {
        const userData = await this.userModel.findOne({where: { email: user.email }})
        if(!userData){
            throw new NotFoundException("User not found")
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

        const clearToken = await this.clearResetToken(user.sub)

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
      

    
    async resetPassword( user: user, newPassword: string, response: Response): Promise<{code: number, status: string}>{
        if ( !newPassword ){
            throw new BadRequestException("Missing Required Field")
        }
        const userData = await this.userModel.findOne({where: { name: user.username }}) // checks if user is in the database
        if(!userData){
            throw new NotFoundException("User not found")
        }
        try { // if user is found, perform resetpassword logic
            const hashedNewPassword = await bcrypt.hash(newPassword.toString(), 10)
            if (hashedNewPassword) {
                console.log(" /// hashedpassword // ",hashedNewPassword)
                const newPassword = await userData.update({password: hashedNewPassword}) // update password
                this.logout(response) // after changing password, log user out
                return {code: 200, status: 'password updated successfully'}
            }
        } catch (error) {
            console.error(`Error while resetting password ===> ${error}`)
            throw new InternalServerErrorException("Error resetting password")
        }
    }
}