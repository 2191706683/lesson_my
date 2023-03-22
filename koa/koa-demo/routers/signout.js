const router = require('koa-router')() // 路由对象

router.get('/signout', async (ctx, next) => {
    ctx.session = null
    // ctx.body = true
    ctx.redirect("/posts")
})

module.exports = router
