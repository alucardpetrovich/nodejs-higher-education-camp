import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class PostEntity {
  @PrimaryGeneratedColumn("uuid")
  id = "";

  @Column({ type: "varchar" })
  title = "";

  @Column({ type: "text" })
  content = "";
}
