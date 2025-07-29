import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';

@Module({
  controllers: [PostController],
  providers: [PostService,InfrastructureService],
})
export class PostModule {}
