import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("posts")
export class PostEntity {
  @PrimaryGeneratedColumn("uuid")
  id = "";

  @Column({ type: "varchar" })
  title = "";

  @Column({ type: "text" })
  content = "";

  @CreateDateColumn()
  createdAt = new Date();

  @UpdateDateColumn()
  updatedAt = new Date();
}
