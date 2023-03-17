// 启动了一个http 服务 
// http 服务 基于请求响应
// 用户为何而来，为了资源
const koa = require('koa')
const fs = require('fs')
const app = new koa()
// 中间件函数的方式来提供服务
const main = ctx => {
    if (ctx.request.path !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index Page</a>'
    } else {
        ctx.response.body = 'Hello World'
    }
    // // ctx 上下文 responese  结束
    // // ctx.response.body = 'hello world'
    // ctx.response.type = 'html' // 设置响应头
    // // MVC
    // ctx.response.body = fs.createReadStream('./template.html')

}

app.use(main) // 后端中间件

app.listen(3001, () => {
    console.log('服务器启动中...')
})