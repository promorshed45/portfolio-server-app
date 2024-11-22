import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';

import { PostControllers } from './post.controller';
import { parseBody } from '../../middlewares/bodyParser';
import validateImageFileRequest from '../../middlewares/validateImageFileRequest';
import { ImageFilesArrayZodSchema } from '../../zod/image.validation';
import { multerUpload } from '../../config/multer.config';
import { PostValidation } from './post.validation';

const router = express.Router();

router.post(
  '/',
  auth("ADMIN"),
  multerUpload.fields([{ name: 'postImages' }]),
  validateImageFileRequest(ImageFilesArrayZodSchema),
  parseBody,
  validateRequest(PostValidation),
  PostControllers.createPost,
);

router.get('/', PostControllers.getAllPost);

router.get('/:id', PostControllers.getPost);


router.put('/:id', 
  // multerUpload.fields([{ name: 'postImages' }]),
  // auth('ADMIN',"USER"),
  PostControllers.updatePost);


router.delete('/:id', auth("ADMIN"), PostControllers.deletePost);


export const PostRoutes = router;
