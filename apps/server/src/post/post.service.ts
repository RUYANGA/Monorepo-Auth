import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { InfrastructureService } from 'src/shared/infrastructure/infrastructure.service';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private infrastructure: InfrastructureService,
  ) {}
  async create(createPostDto: CreatePostDto, userId) {
    const { title, content } = createPostDto;
    await this.infrastructure.checkRecordExists('user', userId);

    const post = await this.prisma.post.create({
      data: {
        title,
        content,
        author: userId,
      },
    });
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
