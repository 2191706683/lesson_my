exports.getPosts = async (ctx, next) => {
    // console.log(ctx.session, '////')
    // ctx.response.body = '文章'
    await ctx.render('posts', {
        session: ctx.session
    })
}