import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

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
}