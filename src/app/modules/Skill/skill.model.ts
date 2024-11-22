import mongoose, { Schema } from "mongoose";
import { TSkill } from "./skill.interface";


const skillSchema = new Schema<TSkill>(
  {
    title: { type: String,},
    percent: { type: Number, default: 0},
  },
  { timestamps: true }
);


export const Skill = mongoose.model<TSkill>("Skill", skillSchema);
