
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/public/publicKkey';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(
    private jwtService: JwtService,
    private reflector: Reflector
) {}

async canActivate(context: ExecutionContext): Promise<boolean> {

    // Checks if its a public key
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
    ]);
    if (isPublic) {
        // 💡 See this condition
        return true;
    }

    // Else continue with the verification
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    // const token = this.extractTokenFromHeader(request);
    const token = request.cookies.token // get token from cookies in the request
    if (!token) {
        throw new UnauthorizedException();
    }
    try {
        const payload = await this.jwtService.verifyAsync(
            token,
            {
                secret: process.env.JWT_SECRET
            }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = payload;
        if(parseInt(payload.exp + '000') - Date.now()  < 180000){
            response.cookie('token', await this.jwtService.signAsync({sub: payload.userID, username: payload.username }))
        }

    } catch (e) {
        console.log("/// => ",e)
        throw new UnauthorizedException();
    }
    return true;
}

private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
