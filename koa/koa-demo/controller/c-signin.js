const userModel = require('../lib/mysql.js')
const md5 = require('md5') // 单项加密

exports.getSignin = async ctx => {
    // 显示注册页 view 
    // ctx.response.body = '注册'

    let data = {
        title: '登录'
    }
    await ctx.render('signin', data)
}

exports.postSignin = async ctx => {
    ctx.body = {
        code: 200,
        msg: '登录成功'
    }
}