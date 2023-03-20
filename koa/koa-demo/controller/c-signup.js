exports.getSignup = async ctx => {
    // 现实注册页 view 
    // ctx.response.body = '注册'
    let data = {
        title: '注册'
    }
    await ctx.render('signup', data)
}

exports.postSignup = async ctx => {
    // model
}