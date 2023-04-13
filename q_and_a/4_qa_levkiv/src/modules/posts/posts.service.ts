import { CreatePostDto } from "./dto/create-post.dto";
import { PostEntity } from "./post.entity";
import { postsRepository } from "./posts.repository";

class PostsService {
  async createPost(dto: CreatePostDto): Promise<PostEntity> {
    return postsRepository.create(dto);
  }
}

export const postsService = new PostsService();
