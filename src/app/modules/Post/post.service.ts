/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryBuilder } from '../../builder/QueryBuilder';
import { TImageFiles } from '../../interface/image.interface';
import { TPost } from './post.interface';
import { Post } from './post.model';
import {
  SearchItemByDateRangeQueryMaker,
  SearchItemByUserQueryMaker,
} from './post.utils';

const createPostIntoDB = async (payload: TPost, images: TImageFiles) => {
  const existingPost = await Post.findOne({
    title: new RegExp(`^${payload.title}$`, 'i'),
  });
  if (existingPost) {
    throw new Error(`${payload.title} already exists`);
  }

  const { postImages } = images;
  payload.images = postImages.map((image: { path: any; }) => image.path);

  const result = await Post.create(payload);

  return result;
};


const getAllPostFromDB = async (query: Record<string, unknown>) => {
  query = (await SearchItemByUserQueryMaker(query)) || query;

  // Date range search
  query = (await SearchItemByDateRangeQueryMaker(query)) || query;

  const postQuery = new QueryBuilder(
    Post.find(),
    query,
  )
    .filter()
    .sort()
    .fields();

  const result = await postQuery.modelQuery;

  return result;
};


const getPostFromDB = async (postId: string) => {
  const result = await Post.findById(postId).populate('user');
  return result;
};

const updatePost = async (id: string, payload: Partial<TPost>) => {
  const post = await Post.findByIdAndUpdate(id, payload, { new: true });

  return post;
};

const deletePostFromDB = async (itemId: string) => {
  const result = await Post.findByIdAndDelete(itemId);
  // const deletedItemId = result?._id;
  // if (deletedItemId) {
  //   await deleteDocumentFromIndex('items', deletedItemId.toString());
  // }
  return result;
};



export const PostServices = {
  createPostIntoDB,
  getAllPostFromDB,
  getPostFromDB,
  updatePost,
  deletePostFromDB
};
