const http = require('http')

const server = http.createServer()
// on 想到什么？ eventEmiiter实例
server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    // 与 HEAD 类似 客服端查看服务器的性能 等指标
    // POST  ajax 跨域 OPTIONS
    if (req.method === 'OPTIONS') {
        res.status == 200
        res.end()
        return
    }

    res.end("hello world")

    // 耗时
    /* 
     * - post data  
     * - 文件上传 写入
     */
})

server.listen(8888, () => console.log('listen port 8888'))