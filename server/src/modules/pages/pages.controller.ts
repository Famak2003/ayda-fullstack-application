import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PagesService } from './pages.service';
import { Public } from 'src/public/publicKkey';
import { Pages } from './pages.model';
import { Sections } from '../sections/sections.model';


@Controller('/pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  getHello(): {str: string} {
    return this.pagesService.getHello();
  }

  @Public()
  @Post("create")
  async createPost(
    @Body() body: {name: string}
  ): Promise<Pages>{
    const result = await this.pagesService.createPage(body.name)
    return result
  }

  @Public()
  @Get(':page')
  getDynamicPage(@Param('page') page: string): Promise<Sections[]> {
    return this.pagesService.getPage(page);
  }
}
