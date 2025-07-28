import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as bcrypt from 'bcrypt';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly infrastructureService: InfrastructureService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    const { email, password, name } = createAuthDto;
    try {
      await this.infrastructureService.checkDuplicate('user', [
        { property: 'email', value: email },
      ]);
      const hashPassword = await bcrypt.hash(password, 12);

      const user = await this.prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Something went wrong, try again');
    }
  }
  async login(dto): Promise<{ access_token: string }> {
    const { email, password } = dto;

    try {
      const userExist = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!userExist || !userExist.password) {
        throw new UnauthorizedException('Email or password incorrect');
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        userExist.password,
      );
      if (!isPasswordCorrect) {
        throw new UnauthorizedException('Email or password incorrect');
      }

      const payload = {
        sub: userExist.id,
        email: userExist.email,
      };

      const access_token = await this.jwtService.signAsync(payload);

      return { access_token };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      throw new InternalServerErrorException('Something went wrong, try again');
    }
  }
}
