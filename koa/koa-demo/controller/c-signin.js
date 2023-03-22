const userModel = require('../lib/mysql.js')
const md5 = require('md5') // 单项加密

exports.getSignin = async ctx => {
    // 显示注册页 view 
    // ctx.response.body = '注册'

    let data = {
        title: '登录',
        session: ctx.session
    }
    await ctx.render('signin', data)
}

exports.postSignin = async ctx => {
    let { name, password } = ctx.request.body
    // console.log(name, password)
    try {
        let data = await userModel.findDataByName(name)
        if (data.length) {
            if (name === data[0]['name'] && md5(password) === data[0]['pass']) {
                ctx.session = {
                    user: data[0]['name'],
                    id: data[0]['id']
                }

                ctx.cookies.set('b', '2', {
                    domain: 'localhost',
                    path: '/',
                    maxAge: 2 * 60 * 60 * 1000,
                    HttpOnly: true
                })

                ctx.body = {
                    code: 200,
                    msg: '登录成功'
                }
            }
        } else {
            ctx.body = {
                code: 500,
                msg: '用户名或密码错误'
            }
        }
    } catch(e) {

    }
}