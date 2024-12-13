import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): {str: string} {
    return this.appService.getHello();
  }

  @Get('db')
  getHealth(): Promise<string>{
    return this.appService.getHealth()
  }
}
