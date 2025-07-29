import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { InfrastructureModule } from './shared/infrastructure/infrastructure.module';
import { PostModule } from './post/post.module';
import {ConfigModule} from "@nestjs/config"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule, 
    PrismaModule,
    InfrastructureModule,
    PostModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
