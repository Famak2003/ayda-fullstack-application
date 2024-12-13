import { BadRequestException, ConflictException, GoneException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService{

    private readonly salt = 10

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ){}

    getTest(): {test: string} {
        return {test: "User route running"}
    }

    async createUser(name: string, email: string, password: string): Promise<User>{
        if (!name || !email || !password){
            throw new BadRequestException("Missing Required Field")
        }
        try {
            // Check if email already exists
            const existingUser = await this.userModel.findOne({where: { email }})
            if (existingUser){
                throw new ConflictException("Email exist in the database")
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password.toString(), this.salt)
            if (!hashedPassword){
                throw new InternalServerErrorException()
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
            throw new GoneException("Error creating user")
        }
        // return this.userModel.create({
        //     name,
        //     password,
        //     email
        // })
    }
}