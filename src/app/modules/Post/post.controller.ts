import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../errors/AppError';
import { PostServices } from './post.service';
import catchAsync from '../../utils/catchAsync';
import { TImageFiles } from '../../interface/image.interface';

const createPost = catchAsync(async (req, res) => {
  if (!req.files) {
    throw new AppError(400, 'Please upload an image');
  }
  const post = await PostServices.createPostIntoDB(
    req.body,
    req.files as TImageFiles,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post created successfully',
    data: post,
  });
});


const getAllPost = catchAsync(async (req, res) => {
  const courseData = await PostServices.getAllPostFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post retrieved successfully',
    data: courseData,
  });
});

const getPost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const postData = await PostServices.getPostFromDB(postId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post retrieved successfully',
    data: postData,
  });
});


 const updatePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const result = await PostServices.updatePost(postId, req.body);

  console.log('Post Data to Update:', result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Post updated successfully",
    data: result,
  });
});


const deletePost = catchAsync(async (req, res) => {
  const { id } = req.params;
  await PostServices.deletePostFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Post deleted successfully',
    data: null,
  });
});





export const PostControllers = {
  createPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost
};
