import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pages } from './pages.model';

@Injectable()
export class PagesService {
  constructor(
    @InjectModel(Pages)
    private pagesModel: typeof Pages,
  ) {}
  
  async findAll(): Promise<Pages[]> {
    return this.pagesModel.findAll();
  }

  getHello(): {str: string} {
    return {str: "Hey its running"}
  }

  findOne(id: string): Promise<Pages> {
    return this.pagesModel.findOne({
      where: {
        id,
      },
    });
  }
}