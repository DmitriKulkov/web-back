import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comments.entity';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comments) private post: Repository<Comments>) {}

  async getCommentsByPost(postId: number) {
        const p = this.post.find({
            where: {postId}
        })
        return p
    }
}
