import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/post.entity';
import { Comments } from './comments/comments.entity';
import { ConfigModule } from '@nestjs/config';
import * as PostgresConnectionStringParser from 'pg-connection-string';

const isProd = process.env.PGSSLMODE === 'production';
const connectionOptions = isProd
  ? PostgresConnectionStringParser.parse(process.env.DB_URL)
  : null;
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      !isProd
        ? {
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Post, Comments],
            synchronize: true,
            autoLoadEntities: true,
            logging: true,
          }
        : {
            type: 'postgres',
            host: connectionOptions.host,
            port: parseInt(connectionOptions.port),
            username: connectionOptions.user,
            password: connectionOptions.password,
            database: connectionOptions.database,
            entities: [Post, Comments],
            synchronize: true,
            autoLoadEntities: true,
            logging: true,
          },
    ),
    PostModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
