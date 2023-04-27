import express from 'express';
import * as userController from './user.controller';
const router = express.Router();
import {
    hashPassword,
    validateUserData
} from './user.middleware'

/**
 * restful
 * users post 新增
 */
router.post('/users', validateUserData, hashPassword , userController.store);

/**
 * 导出路由
 */
export default router;