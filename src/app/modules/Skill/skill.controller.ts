/* eslint-disable no-console */
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { SkillServices } from './skill.service';
import catchAsync from '../../utils/catchAsync';

const createSkill = catchAsync(async (req, res) => {
    const skill = await SkillServices.createSkillIntoDB(
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill created successfully',
    data: skill,
  });
});


const getAllSkill = catchAsync(async (req, res) => {
  const courseData = await SkillServices.getAllSkillFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill retrieved successfully',
    data: courseData,
  });
});

const getSkill = catchAsync(async (req, res) => {
  const skillId = req.params.id;
  const skillData = await SkillServices.getSkillFromDB(skillId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill retrieved successfully',
    data: skillData,
  });
});


 const updateSkill = catchAsync(async (req, res) => {
  const skillId = req.params.id;
  const result = await SkillServices.updateSkill(skillId, req.body);

  console.log('Skill Data to Update:', result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});


const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  await SkillServices.deleteSkillFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Skill deleted successfully',
    data: null,
  });
});





export const SkillControllers = {
  createSkill,
  getAllSkill,
  getSkill,
  updateSkill,
  deleteSkill
};
