let http = require('http') // 内置的模块 https net
// 基于请求响应
let server = http.createServer((req, res) => {
  res.end('hello world')
})

server.listen(4000)