const koa = require('koa')
const config = require('./config/default.js')
const app = new koa()
// MVC的本质
const signupRouter = require('./routers/signup.js')
const postsRouter = require('./routers/posts.js')

app.use(signupRouter.routes())
app.use(postsRouter.routes())
/* // 如何记录一个请求所花时间
// 第一个 计时开始
app.use(async (ctx, next) => {
    console.log('中间件')
    const start = new Date().getTime()
    await next()
    const end = new Date().getTime()
    console.log('请求花费时间为', end - start, 'ms')
})

app.use(async (ctx, next) => {
    console.log('中间件2')
    const data = await getData()
    ctx.body = { data }
    await next()
})

const getData = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    return 'Hello World'
} */

app.listen(config.port)

console.log(`listening on port ${config.port}...`)