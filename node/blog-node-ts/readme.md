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