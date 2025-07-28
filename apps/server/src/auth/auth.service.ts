import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as bcrypt from 'bcrypt';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService:JwtService,
    private readonly infrastructureService: InfrastructureService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    const { email, password, name } = createAuthDto;

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
  }
  async login(dto):Promise<{access_token:string}> {
    const { email, password } = dto;

    const userExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExist || !(await bcrypt.compare(password, userExist.password))) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const payload={
      sub:userExist.id,
      email:userExist.email
    }



    return {
      access_token:await this.jwtService.signAsync(payload),
    };
  }
  
}
