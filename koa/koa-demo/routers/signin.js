const router = require('koa-router')() // 路由对象
// 控制权交给control 层
const controller = require('../controller/c-signin')
router.get('/signin', controller.getSignin)
router.post('/signin', controller.postSignin)
module.exports = router
