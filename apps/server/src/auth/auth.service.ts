import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import * as bcrypt from 'bcrypt';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
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
       name,
        email,
        password: hashPassword,
      },
      select: {
        id: true,
        name:true,
        email: true,
      },
    });

    return user;
  }
  async login(dto) {
    const { email, password } = dto;

    const userExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userExist || !(await bcrypt.compare(password, userExist.password))) {
      throw new UnauthorizedException('Email or password incorrect');
    }
    
    return userExist
  }
}
