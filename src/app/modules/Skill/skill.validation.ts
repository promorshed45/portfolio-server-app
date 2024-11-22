import { z } from "zod";

export const SkillValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: 'Title is required' })
      .max(255, { message: 'Title must be less than 255 characters' })
      .trim(),
    percent: z.number().min(1, { message: 'Description is required' }),
  }),
});


export const UpdateSkillValidation = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: 'Title is required' })
      .max(255, { message: 'Title must be less than 255 characters' })
      .trim(),
      percent: z.number().min(1, { message: 'Description is required' }),
  }).partial(),
});
