import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Response,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Response as Res } from 'express';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getPosts(@Query() que, @Response() res: Res) {
    this.postService.getAll(que, res).then((p) => {
      return res.send(p);
    });
  }

  @Get(':id/comments')
  getCommentsByPost(@Param('id') id: number) {
    return this.postService.getCommentsById(id);
  }

  @Get(':id')
  getPostById(@Param('id') id: number) {
    return this.postService.getById(id);
  }

  @Post()
  createPost(@Body() dto) {
    return this.postService.createPost(dto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number) {
    return this.postService.deletePost(id);
  }
}
