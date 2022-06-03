import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/comments/comments.entity';
import { CommentsService } from 'src/comments/comments.service';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { Response as Res } from 'express';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private post: Repository<Post>,
    private commentsService: CommentsService,
  ) {}
  async getAll(que, res: Res) {
    // const posts
    this.post.query('SELECT count(*) FROM post').then(function (num) {
      res.set({ 'x-total-count': num[0].count });
    });
    const p = this.post.find({
      take: que._limit,
      skip: (que._page - 1) * que._limit,
    });
    // .then(psts=>{
    //     posts = psts
    //     size = psts.length
    // })
    return p;
  }

  async getById(id: number) {
    const p = this.post.find({
      where: { id },
    });
    return p;
  }

  async getCommentsById(id: number) {
    return this.commentsService.getCommentsByPost(id);
  }

  async createPost(dto) {
    return await this.post.save({ ...dto });
  }

  async deletePost(id: number) {
    return await this.post.delete(id);
  }
}
