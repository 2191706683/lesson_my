- ts -> js 才能运行
    typescript tsc
    tsc-watch 热更新 
    tsconfig.json  exclude target 
    @types/express 类型声明文件

- 新的架构
- dotenv 解决安全
    - 敏感信息放在.env中
    - 调用dotenv.config()
        node 操作系统
    - process.env 结构出来
    - .gitignore .env 不上传
    - 在信的过的同事间共享

- 介绍http状态码 相应的场景
    - 1XX 正在进行中 http://www.baidu.com -> 101  switch Protocl
https://
    - 2XX 成功 201 成功添加
    - 3XX 跳转 
    - 4XX 用户端出错
        400 Bad Request   用户没有按要求完成
        401 Unauthorized  未登录
        403 Forbidden
        409 Conflict  冲突 注册时 用户名别人注册了
    - 5XX 服务器错误

- 错误处理中间件
    - 应用中最后的中间件是错误处理中间件
        错误无处不在 js 的单线程 带宽和服务器的性能 硬件服务器
    - 有四个参数
        error 是第一个
        next(new Error("")) 只有错误处理中间件才能处理

- Node企业级开发思路
    - 中间件开发模式
        - npm 通用中间件
            cors json()  bodyParser() ...
        - 手写中间件
            路由中间件，错误处理中间件
        - 进入到路由的业务处理也用中间件来模块化处理
            Router -> 参数校验 -> 功能1 ... 功能n -> 数据库操作 -> 返回
    - HTTP 的状态码标准
    - 架构
        每个路由模块中
        - xxx.router.ts
        - xxx.middleware.ts
        - xxx.controller.ts
        - xxx.service.ts
        - xxx.model.ts
        - xxx.test.ts