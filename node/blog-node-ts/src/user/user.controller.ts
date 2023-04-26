import { Request, Response, NextFunction } from "express";

export const store = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 请求体中解出用户名 密码
    const { name, password } = request.body
    // sql 数据库和node 服务器 一定是分离
    console.log(name, password, '////')
    try {

    } catch (error) {
        next(error)
    }
}