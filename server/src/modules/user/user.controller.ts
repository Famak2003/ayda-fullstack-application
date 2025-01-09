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

    @Post("verify-mail")
      async verifyMail(@Body() body: {email: string}, @Req() request: {user : user}) {
        const mail = await this.userService.verifyMail(request.user, body.email);
    
        return mail
    }

    @Post("verify-token")
      async verifyToken(@Body() body: {otp: number}, @Req() request: {user : user}) {
        const verifyToken = await this.userService.verifyToken(request.user, body.otp);
    
        return verifyToken
    }

    @Put('reset-password')
    async resetPassord(@Body() body: {newPassword: string}, @Req() request: {user : user}, @Res({ passthrough: true}) response: Response): Promise<{code: number, status: string}>{
        const resetPassord = await this.userService.resetPassword( request.user, body.newPassword, response)
        return resetPassord
    }
}

