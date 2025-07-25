import {
  Controller,
  Post,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  create(@Body(ValidationPipe) createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }
  @Post('/login')
  login(@Body(ValidationPipe) dto: CreateAuthDto) {
    return this.authService.login(dto)
  }
}
