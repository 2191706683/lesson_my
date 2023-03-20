const koa = require('koa')
const config = require('./config/default.js')
const app = new koa()


// 洋葱模型
// 中间件为其服务  餐厅
// blog  网站  对用户的服务很复杂的事情
// 一个函数解决一个问题
app.use((ctx, next) => { // 服务员
    console.log(1)
    next()  // compose
    console.log(6)
    // 向下
    // ctx.response.body = 'hello world'
})

app.use((ctx, next) => { // 厨师
    console.log(2)
    // ctx.response.body = 'hello world'
    next()
    console.log(5)
})

app.use((ctx, next) => {
    console.log(3)
    // ctx.response.body = 'hello world'
    next()
    console.log(4)
})

app.listen(config.port)

console.log(`listening on port ${config.port}...`)