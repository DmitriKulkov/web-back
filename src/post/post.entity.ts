import { Comments } from "src/comments/comments.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({ name: "post" })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "bigint", nullable: false })
  userId: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  title: string;

  @Column({ type: "text", nullable: false })
  body: string;

  @OneToMany(() => Comments, (comments) => comments.postId)
  comments: Comments[];
}
