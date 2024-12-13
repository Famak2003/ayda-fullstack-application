import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sections } from './sections.model';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';

@Module({
    imports: [SequelizeModule.forFeature([Sections])],
    providers: [SectionsService],
    controllers: [SectionsController],
})
export class SectionsModule {}