import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        SequelizeModule.forFeature([User]),
        ConfigModule
    ],
    providers: [UserService, { provide: APP_GUARD, useClass: AuthGuard }],
    controllers: [UserController],
})
export class UserModule {}
