import { Controller, Get, Post } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('/sections')
export class SectionsController {
    constructor(private readonly sectionsService: SectionsService) {}

    @Get()
    getGreetings(): {greet: string}{
        return this.sectionsService.getGreetings();
    }

    @Get('/info')
    getInfo(): {test: string}{
        return this.sectionsService.getInfo();
    }
}