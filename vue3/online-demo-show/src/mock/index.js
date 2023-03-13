import Mock from 'mockjs'

Mock.mock(/\/login/, 'post', (options) => {
    console.log(options)
    const body = options.body
    const { name, password } = JSON.parse(body)
    console.log(name, password, '???')
    if (name === 'admin' && password === '123456') {
        return {
            code: 0,
            status: 200,
            token: 'slfkjlkfkdsljfklaj',
            msg: 'hello'
        }
    } else {
        return {
            code: 1,
            status: 400,
            msg: '账号或密码有误'
        }
    }
})

Mock.mock(/\/second/, 'get', (options) => {
    console.log(options)
    return {
        code: 200,
        msg: 'ok'
    }
})