const koa = require('koa')
const route = require('koa-route')
const app = new koa()

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
}

const main = ctx => {
    ctx.response.body = 'hello world'
}

app.use(route.get('/', main)) // 路由中间件
app.use(route.get('/about', about))

app.listen(3000, () => {
    console.log('3000端口服务启动中...')
})