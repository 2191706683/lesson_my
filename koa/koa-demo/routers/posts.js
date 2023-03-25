const routers = require('koa-router')()

const controller = require('../controller/c-posts.js')
const checkLogin = require('../middlewares/check.js').checkLogin

routers.get('/', controller.getRedirectPosts)
// restful-api?
// 文章页

// 单纯渲染posts页面并传session
routers.get('/posts', controller.getPosts)
// 单篇文章详情页
routers.get('/posts/:postId', controller.getSinglePosts)
routers.get('/create', checkLogin, controller.getCreate)
// 发表文章
routers.post('/create', controller.postCreate)
// 删除单篇文章
// routers.delete('/posts/:postId', checkLogin, controller.postDelete)
// 新增评论
// routers.post('/posts/:postId', checkLogin, controller.postComment)

module.exports = routers