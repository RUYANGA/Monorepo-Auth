import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService,InfrastructureService,PrismaService],
})
export class AuthModule {}
