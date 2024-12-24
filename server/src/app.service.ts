import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(
    private readonly sequelize: Sequelize
  ){}
  getHello(): {str: string} {
    return {str: 'Hello World!'};
  }

  async getHealth(): Promise<string>{
    try {
      await this.sequelize.authenticate(); // Test the database connection
      return 'Database connection is healthy!';
    }
    catch (error){
      console.error('Database connection failed:', error);
      return 'Database connection failed!';
    }
  }

  async checkTokenHealth(): Promise<{expired: boolean}>{
    return {expired: false}
  }
}
