const Controller = require("./controller");
const http = require('http');

// const { EventEmitter } = require("stream");
const controller = new Controller(); // 面向对象思想 
const server = http.createServer();

// server 是什么？ EventEmitter
server.on("request", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "*");
    // 复杂跨域请求
    if (req.method === "OPTIONS") {
        res.status = 200;
        res.end();
        return;
    }
    // 上传切片
    if (req.url === '/') {
        await controller.handleFormData(req, res);
    }
    // 合并
    if (req.url === '/merge') {
        await controller.handleMerge(req, res);
    }
    //
    if (req.url === '/verify') {
        await controller.handleVerifyUpload(req, res);
    }
    if (req.url === '/delete') {
        await controller.deleteFiles(req, res);
    }
})

server.listen(3000, () => {
    console.log('listening port 3000');
})
// console.log(server instanceof EventEmitter);