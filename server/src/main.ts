import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configure CORS explicitly
  app.enableCors({
    origin: true, // The frontend URL
    methods: "*", // Allowed HTTP methods
    allowedHeaders: ['content-type'], // Allowed headers
    credentials: true,
  });
  app.use(cookieParser());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  await app.listen(process.env.PORT ?? 4000, () => {
    console.log(`App running on port ${process.env.PORT}`)
  });
}

bootstrap();