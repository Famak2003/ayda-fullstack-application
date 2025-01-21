import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PagesModule } from './modules/pages/pages.module';
import { SectionsModule } from './modules/sections/sections.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config'
import jwtConfig from './config/jwt.config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import mailerConfig from './config/mailer.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MulterModule } from '@nestjs/platform-express';
import envConfig from './config/env.config';
// import { User } from './modules/user/user.model';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes config globally available
      load: [databaseConfig, jwtConfig, mailerConfig, envConfig], // Load custom configuration
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: configService.get<'mysql' | 'sqlite' | 'postgres' | 'mariadb'>('database.dialect'),
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        // models: [Pages, Sections, User],
        autoLoadModels: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.registerAsync({
        imports: [ConfigModule],
        global: true,
        useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('jwt.secret'),
            signOptions: { expiresIn: '1h' }, // Move signOptions here
        }),
        inject: [ConfigService],
    }),
  //   envConfig.registerAsync({
  //     imports: [ConfigModule],
  //     global: true,
  //     useFactory: async (configService: ConfigService) => ({
  //       recaptcha: configService.get<string>('jwt.recaptcha'),
  //     }),
  //     inject: [ConfigService],
  // }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('mailer.host'),
          port: configService.get<number>('mailer.port'),
          auth: {
            user: configService.get<string>('mailer.gmailUsername'),
            pass: configService.get<string>('mailer.gmailPassword'),
          },
        },
        defaults: {
          from: `"No Reply" Whats up testing 1234567890`, // Optional default sender
        },
      }),
      inject: [ConfigService],
    }),
    MulterModule.register({
      dest: './uploads'
    }),
    PagesModule,
    SectionsModule,
    // SequelizeModule.forFeature([User]),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, {provide: APP_GUARD, useClass: AuthGuard}],
})
export class AppModule {}
