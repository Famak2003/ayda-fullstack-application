import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { Response, response } from 'express';
import { Public } from 'src/public/publicKkey';

interface user {
    sub: number,
    name: number,
    username: string,
    email: string,
    iat: number,
    exp: number,
  }

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

    @Public()
    @Post("login")
    async login(
        @Body() body: {email: string, password: string},
        @Res({ passthrough: true}) response: Response
    ): Promise<{code: number, status: string, token: string}>{
        const {code, token} = await this.userService.login(body.email, body.password);
        try {
            // Set cookie
            response.cookie('token', token)

            return {code, status: 'success', token}
        } catch (error) {
            console.error('Error during registration:', error);
            throw new InternalServerErrorException("Error creating user")
        } 
    }

    @Public()
    @Get("logout")
    async logout(
        @Res({ passthrough: true}) response: Response
    ): Promise<{code: number, status: string}>{
        const logout = await this.userService.logout(response)
        return logout
        
    }

    @Public()
    @Post("contact-us")
    async contactUs(
        @Body() body: {email: string, name:string, message: string, subject: string}){
            return await this.userService.contactUs(body.message, body.email, body.subject, body.name)
        }

    @Public()
    @Post("verify-mail")
      async verifyMail(@Body() body: {email: string}, @Req() request: {user : user}) {
        const mail = await this.userService.verifyMail(request.user, body.email);
    
        return mail
    }

    @Public()
    @Post("verify-token")
      async verifyToken(@Body() body: {otp: number, email: string}) {
        const verifyToken = await this.userService.verifyToken(body.email, body.otp);
    
        return verifyToken
    }

    @Public()
    @Post('reset-password')
    async resetPassord(@Body() body: {newPassword: string, email: string}, @Req() request: {user : user}): Promise<{code: number, status: string}>{
        const resetPassord = await this.userService.resetPassword( body.email, body.newPassword)
        return resetPassord
    }
}

