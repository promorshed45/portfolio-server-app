import { z } from "zod";

export const PostValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: 'Title is required' })
      .max(255, { message: 'Title must be less than 255 characters' })
      .trim(),
    description: z.string().min(1, { message: 'Description is required' }),
    category: z.string().min(1, { message: 'Category is required' }),
    images: z.array(z.string()).optional(),
  }),
});


export const UpdatePostValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: 'Title is required' })
      .max(255, { message: 'Title must be less than 255 characters' })
      .trim(),
    description: z.string().min(1, { message: 'Description is required' }),
    images: z.array(z.string()).optional(),
  }).partial(),
});
