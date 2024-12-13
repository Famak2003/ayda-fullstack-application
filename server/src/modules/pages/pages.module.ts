import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pages } from './pages.model';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';

@Module({
  imports: [SequelizeModule.forFeature([Pages])],
  providers: [PagesService],
  controllers: [PagesController],
})
export class PagesModule {}
