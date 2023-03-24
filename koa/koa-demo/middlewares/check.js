module.exports = {
    checkLogin: async (ctx, next) => {
        // {} anoymous && user
        if (!ctx.session || !ctx.session.user) {
            ctx.redirect('/signin')
            // return false
        }
        // return true
        await next()
    }
}