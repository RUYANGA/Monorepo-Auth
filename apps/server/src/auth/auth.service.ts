import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}


  async create(createAuthDto: CreateAuthDto) {
    const { firstName, lastName, email, password, phone } = createAuthDto;
    const existUser= await this.prisma.user.findUnique({where:{
      email
    }})

    if(existUser){
      throw new BadRequestException("User with email esixting ")
    }
    const user = await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        phone,
      },
    });

    return user
  }

  async login(dto) {
    return `This action returns all auth`;
  }

}
