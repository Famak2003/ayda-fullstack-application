import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        SequelizeModule.forFeature([User]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            global: true,
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('jwt.secret'),
                signOptions: { expiresIn: '5m' }, // Move signOptions here
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [UserService, { provide: APP_GUARD, useClass: AuthGuard }],
    controllers: [UserController],
})
export class UserModule {}
