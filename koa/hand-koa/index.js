const Koa = require('./lib/application')

const app = new Koa()

app.use(ctx => {
    console.log(ctx.req.url)
    console.log(ctx.request.req.url)
    console.log(ctx.response.req.url)
    console.log(ctx.request.url)
    console.log(ctx.url)
    console.log(ctx.path)
    ctx.body = 'Hello World'
})
// app.on('yilin', function() {
//     console.log('yilin')
// })

// setTimeout(() => {
//     app.emit('yilin')
// }, 2000)

app.listen(8888, () => {
    console.log('端口启动中....')
})
