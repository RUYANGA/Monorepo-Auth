import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma:PrismaService,
    private readonly infrastructure:InfrastructureService,
  ){}
  async create(createUserDto: CreateUserDto) {
    
  }

  async findAll() {
   const users=await this.prisma.user.findMany({
      select:{
        id:true,
        name:true,
        email:true
      }
    })
    return users
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id:string) {
    const deleteUser=await this.prisma.user.delete({
      where:{
        id
      }
    })
    return deleteUser
  }
  
}
