import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/post.entity';
import { Comments } from './comments/comments.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'root',
      database: 'posts',
      entities: [Post, Comments],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    PostModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
