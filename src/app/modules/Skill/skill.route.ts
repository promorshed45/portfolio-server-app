import express from 'express';
import { SkillControllers } from './skill.controller';


const router = express.Router();

router.post(
  '/',
  SkillControllers.createSkill,
);

router.get('/', SkillControllers.getAllSkill);

router.get('/:id', SkillControllers.getSkill);


router.put('/:id', 
  SkillControllers.updateSkill);


router.delete('/:id', SkillControllers.deleteSkill);


export const SkillRoutes = router;
