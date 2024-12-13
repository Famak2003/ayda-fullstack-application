import { Controller, Get, Post } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('/pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  getHello(): {str: string} {
    return this.pagesService.getHello();
  }
}
