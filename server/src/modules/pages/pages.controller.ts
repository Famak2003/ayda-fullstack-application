import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { PagesService } from './pages.service';
import { Public } from 'src/public/publicKkey';
import { Pages } from './pages.model';
import { Sections } from '../sections/sections.model';
import { Request as ExpressRequest } from 'express';


declare global {
  namespace Express {
    interface Request {
      user?: { sub: number, username: string, iat: number, exp: number };
    }
  }
}

@Controller('/pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Get()
  getHello(@Request() req: ExpressRequest): {str: string} {
    console.log("========  dshbfkhd? ",req.user)
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
