// TDD  请求库
// 熟悉Axios 接口请求配置 拦截等 了解supertest 测试请求库
import request from 'supertest';
import app from "../app";
import { getUserById } from './user.service';

const testUser = {
    name: 'test-user-name4',
    password: '111111'
}

let testUserCreated ;

afterAll(async () => {
    // if
})

describe('测试创建用户接口', () => {
    test('创建用户时必须提供用户名', async () => {
        const response = await request(app)
            .post('/users')
            .send({ password: testUser.password })
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ message: '请提供用户名' })
    })

    test('创建用户时必须提供密码', async () => {
        // 不需要postman, supertest 来向应用发送请求
        // 自动化？
        // 开发development完毕 -> test 测试阶段(TDD 自动化测试) -> 本地代码push到服务器的main分支 代码上线 -> 真正online
        const response = await request(app)
            .post('/users')
            .send({ name: testUser.name })
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ message: '请提供密码' })
    })

    // test('成功创建用户以后，响应状态码应该是201', async () => {
    //     const response = await request(app)
    //         .post('/users')
    //         .send(testUser)
    //     // jest expect 断言
    //     // 设置创建的测试用户
    //     testUserCreated = await getUserById(response.body.insertId)
    //     console.log(testUserCreated)
    //     expect(response.status).toBe(201);
    // })
})

describe('测试用户账户接口', () => {
    test('响应里应该包含指定的属性', async () => {
        const response = await request(app)
            .get('/users/1');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('王皓');
    })
    
    test('当用户不存在时，响应的状态码是404', async () => {
        const response = await request(app)
            .get('/users/-1');
        expect(response.status).toBe(404);
    })

})

