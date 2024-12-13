import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
// import { Pages } from './modules/pages/pages.model';
import { PagesModule } from './modules/pages/pages.module';
import { SectionsModule } from './modules/sections/sections.module';
// import { Sections } from './modules/sections/sections.model';
// import { User } from './modules/user/user.model';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes config globally available
      load: [databaseConfig], // Load custom configuration
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
    PagesModule,
    SectionsModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
