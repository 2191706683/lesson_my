// web app
let http = require('http')
// Node里有 event loop
// Node 有 events 模块 自定义事件
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter {
    constructor() {
        super() // es6    es7  yield
        this.fn  // this 跨函数调用
        this.context = context
        this.request = request
        this.response = response
    }
    use(fn) {
        this.fn = fn
    }
    createContext(req, res) {
        // 使用Object.create 方法 继承this.context 但在增加属性时不影响原对象
        const ctx = Object.create(this.context)
        const request = ctx.request = Object.create(this.request)
        const response = ctx.response = Object.create(this.response)
        ctx.req = request.req = response.req = req
        ctx.res = request.res = response.res = res
        request.ctx = response.ctx = ctx
        request.response = response
        response.request = request
        return ctx
    }
    handleRequest(req, res) {
        const ctx = this.createContext(req, res)
        this.fn(ctx)
        res.end(ctx.body)
    }
    listen(...args) {
        // let server = http.createServer(this.fn)
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(...args)
    }
}

module.exports = Koa