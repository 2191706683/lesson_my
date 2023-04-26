import express from 'express';
import * as userController from './user.controller';
const router = express.Router();


/**
 * restful
 * users post 新增
 */
router.post('/users', userController.store);

/**
 * 导出路由
 */
export default router;