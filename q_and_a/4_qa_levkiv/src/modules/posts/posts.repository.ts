import { getConnection } from "src/database";
import { PostEntity } from "./post.entity";
import { DeepPartial } from "typeorm";

class PostsRepository {
  get repository() {
    return getConnection().getRepository(PostEntity);
  }

  async create(post: DeepPartial<PostEntity>): Promise<PostEntity> {
    return this.repository.save(post);
  }
}

export const postsRepository = new PostsRepository();
