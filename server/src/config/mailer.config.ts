import { registerAs } from '@nestjs/config';

export default registerAs('mailer', () => ({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  username: process.env.EMAIL_USERNAME,
  password: process.env.EMAIL_PASSWORD,
  gmailPassword: process.env.GMAIL_APP_PASSWORD,
  gmailUsername: process.env.GMAIL_USERNAME,
}));