import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { Response, response } from 'express';

@Controller('/user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    getTest() :{test: string}{
        return this.userService.getTest();
    }

    @Put('create')
    async createUser(
        @Body() body: { email: string, name: string, password: string } 
    ): Promise<User>{
        const result = await this.userService.createUser(body.name, body.email, body.password);
        return result
    }

    @Post("login")
    async login(
        @Body() body: {email: string, password: string},
        @Res({ passthrough: true}) response: Response
    ): Promise<{code: number, status: string}>{
        const {code, token} = await this.userService.login(body.email, body.password);
        try {
            // Set cookie
            response.cookie('token', token)

            return {code, status: 'success'}
        } catch (error) {
            console.error('Error during registration:', error);
            throw new InternalServerErrorException("Error creating user")
        } 
    }

    @Put('reset-password')
    async resetPassord(@Body() body: {email: string, newPassword: string}): Promise<{code: number, status: string}>{
        return this.userService.resetPassword(body.email, body.newPassword)
    }
}