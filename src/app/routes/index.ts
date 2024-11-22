import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { PostRoutes } from '../modules/Post/post.route';
import { SkillRoutes } from '../modules/Skill/skill.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/post',
    route: PostRoutes,
  },
  {
    path: '/skill',
    route: SkillRoutes,
  },
 


  
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
