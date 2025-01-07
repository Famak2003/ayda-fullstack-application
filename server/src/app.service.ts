import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(
    private readonly sequelize: Sequelize,
    private readonly mailService: MailerService
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

  sendMail() {
    const message = `Forgot your password? If you didn't forget your password, please ignore this email! from FAMAK 🙃`;

    this.mailService.sendMail({
      from: 'izzy@mailinator.com',
      to: 'izzy@mailinator.com',
      subject: `How to Send Emails with Nodemailer`,
      text: message,
      html: '<b>Tesing 123...</b>'
    });
  }


}
