import { Router } from "express";
import { validateReq } from "src/shared/middlewares/validate";
import { serialize } from "src/shared/serializer";
import { CreatePostDto } from "./dto/create-post.dto";
import { postsService } from "./posts.service";
import { PostSerializer } from "./serializers/post.serializer";
import { asyncWrapper } from "src/shared/middlewares/async-wrapper";

const router = Router();

router.post(
  "/",
  validateReq(CreatePostDto),
  asyncWrapper(async (req, res) => {
    const post = await postsService.createPost(req.body);
    res.status(201).send(serialize(PostSerializer, post));
  })
);

export const postsController = router;
