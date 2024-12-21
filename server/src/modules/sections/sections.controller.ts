import { Body, Controller, Get, HttpException, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';

interface heroPayload {
  header: string;
  subHeader: string;
  image: string;
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

    @Post('/upload-hero-section')
    async uploadHeroSection(
        @Body() body: heroPayload[],
    ): Promise<{status: number, message: string}> {
        const {message} =  await this.sectionsService.uploadHeroSection(body)


       

        

        return { status: 200, message: "uploaded successfully" };
    }
}