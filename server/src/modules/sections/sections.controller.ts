import { Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';
import { Sections } from './sections.model';
import { Pages } from '../pages/pages.model';

interface heroPayload {
  header: string;
  subHeader: string;
  image: string;
}

interface sectionPayload {
    pageName: string,
    type: string,
    content: any
}

@Controller('/sections')
export class SectionsController {
    constructor(
        private readonly sectionsService: SectionsService,
    ) {}

    @Get()
    getGreetings(): {greet: string}{
        return this.sectionsService.getGreetings();
    }

    @Get('/info')
    getInfo(): {test: string}{
        return this.sectionsService.getInfo();
    }


    @Post("create")
    async createSection(
        @Body() body: sectionPayload
    ): Promise<{message: string}>{
        return this.sectionsService.createSection(body)
    }

    @Post('/upload-hero-section')
    async uploadSection(
        @Body() body: heroPayload[],
    ): Promise<{status: number, message: string}> {
        const {message} =  await this.sectionsService.uploadSection(body)


       

        

        return { status: 200, message: "uploaded successfully" };
    }
}