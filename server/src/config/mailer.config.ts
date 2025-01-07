import { registerAs } from '@nestjs/config';

export default registerAs('mailer', () => ({
  host: process.env.EMAIL_HOST,
  username: process.env.EMAIL_USERNAME,
  password: process.env.EMAIL_PASSWORD,
}));