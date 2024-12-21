import { BadRequestException, ConflictException, GoneException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService{

    private readonly salt = 10

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private jwtService: JwtService,
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
        const isPasswordValid = bcrypt.compare(password, databasePassword )
        if (!isPasswordValid){
            throw new UnauthorizedException("Incorrect Password")
        }
        
        // Generate token
        const username = userData.dataValues.name
        const userID = userData.dataValues.id
        const payload = {sub: userID, username }
        const token = await this.jwtService.signAsync(payload)
        return {
            code: 200,
            token
        }
    }
    
    async resetPassword(email: string, newPassword: string): Promise<{code: number, status: string}>{
        if ( !email || !newPassword ){
            throw new BadRequestException("Missing Required Field")
        }
        const userData = await this.userModel.findOne({where: { email }})
        if(!userData){
            throw new NotFoundException("User not found")
        }
        try {
            const hashedNewPassword = await bcrypt.hash(newPassword.toString(), 10)
            if (hashedNewPassword) {
                userData.dataValues.password = hashedNewPassword
                await userData.save()
                return {code: 200, status: 'password updated successfully'}
            }
        } catch (error) {
            console.error(`Error while resetting password ===> ${error}`)
            throw new InternalServerErrorException("Error resetting password")
            
        }
    }
}