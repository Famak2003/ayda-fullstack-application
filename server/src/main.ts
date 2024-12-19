import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {'origin': "http://localhost:3000"}});
  app.enableCors();
  await app.listen(process.env.PORT ?? 4000, () => {
    console.log(`App running on port ${process.env.PORT}`)
  });
  app.use(cookieParser())
}
bootstrap();
