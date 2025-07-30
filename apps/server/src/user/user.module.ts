import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, InfrastructureService],
})
export class UserModule {}
