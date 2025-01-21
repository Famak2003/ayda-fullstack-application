import { registerAs } from '@nestjs/config';

export default registerAs('env', () => ({
  recaptcha: process.env.RECAPTCHA_SECRET,
}));