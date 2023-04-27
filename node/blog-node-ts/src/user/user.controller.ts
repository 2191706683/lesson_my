import { Request, Response, NextFunction } from "express";
import * as userService from './user.service'

export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 请求体中解出用户名 密码
    const { name, password } = request.body
    // sql 数据库和node 服务器 一定是分离
    console.log(name, password, '////')
    try {
        const data = await userService.createUser({name, password});
        response.status(201).send(data)
    } catch (error) {
        next(error)
    }
}