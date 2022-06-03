import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { CommentsService } from 'src/comments/comments.service';
import { Comments } from 'src/comments/comments.entity';

@Module({
  controllers: [PostController],
  providers: [PostService, CommentsService],
  imports: [
    TypeOrmModule.forFeature([Post, Comments]),
  ],
})
export class PostModule {}
