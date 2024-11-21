import mongoose, { Schema } from "mongoose";
import { TPost } from "./post.interface";


const postSchema = new Schema<TPost>(
  {
    images: { type: [String], default: []},
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);


export const Post = mongoose.model<TPost>("Post", postSchema);
