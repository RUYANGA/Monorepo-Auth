import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('/register')
  create(@Body(ValidationPipe) createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @HttpCode(200)
  @Post('/login')
  login(@Body(ValidationPipe) dto: LoginAuthDto) {
    return this.authService.login(dto)
  }
}
