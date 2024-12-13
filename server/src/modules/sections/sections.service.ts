import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sections } from './sections.model';

@Injectable()
export class SectionsService {
    constructor(
        @InjectModel(Sections)
        private sectionModel: typeof Sections,
    ){}

    getGreetings(): {greet: string} {
        return {greet: "Whats up bruv"}
    }

    getInfo(): {test: string}{
        return {test: "testing route 1234567890"}
    }
}