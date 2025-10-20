import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

interface AuthenticatedRequest extends Request {
  user?: any;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authHeader: string | undefined = request.headers['authorization'];

    if (!authHeader)
      throw new UnauthorizedException('Missing Authorization header');

    const token = authHeader.replace('Bearer ', '').trim();
    const user = await this.authService.verifyToken(token);

    if (!user) throw new UnauthorizedException('Invalid token');

    request.user = user;
    return true;
  }
}
