import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  dialect: process.env.DATABASE_DIALECT as 'mysql' | 'sqlite' | 'postgres' | 'mariadb',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'test',
}));