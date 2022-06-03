import { Post } from "src/post/post.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: "comments" })
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  email: string;

  @Column({ type: "text", nullable: false })
  body: string;

  @ManyToOne(() => Post, (post) => post.comments, {onDelete:"CASCADE"})
  @JoinColumn({name: "postId"})
  postId: Post;
}
