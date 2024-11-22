/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';


const createSkillIntoDB = async (payload: TSkill) => {
  const existingSkill = await Skill.findOne({
    title: new RegExp(`^${payload.name}$`, 'i'),
  });
  if (existingSkill) {
    throw new Error(`${payload.name} already exists`);
  }

  const result = await Skill.create(payload);

  return result;
};


const getAllSkillFromDB = async () => {
  const result = await Skill.find();
  return result;
};


const getSkillFromDB = async (skillId: string) => {
  const result = await Skill.findById(skillId);
  return result;
};

const updateSkill = async (id: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteSkillFromDB = async (itemId: string) => {
  const result = await Skill.findByIdAndDelete(itemId);
   return result;
};



export const SkillServices = {
  createSkillIntoDB,
  getAllSkillFromDB,
  getSkillFromDB,
  updateSkill,
  deleteSkillFromDB
};
