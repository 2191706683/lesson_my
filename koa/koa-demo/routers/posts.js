const router = require('koa-router')()

const controller = require('../controller/c-posts.js')

router.get('/posts', controller.getPosts)

module.exports = router