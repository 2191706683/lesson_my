const http = require('http');
const Controller = require('./controller');
const controller = new Controller();

const server = http.createServer(async (req, res) => {
    // 跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // post authorization 或复杂请求  预检测
    if (req.method === 'OPTIONS') {
        res.status = 200;
        res.end();
        return;
    }
    console.log(req.path, '/////')
    if (/\/api\/order/.test(req.url)) {
        const list = await controller.getList();
        // console.log(list, '////')
        res.end(JSON.stringify(list));
    } else if (/\/api\/order\//.test(req.url)) {
        // res.end('详情内容.....');
        const id = req.url.slice(req.url.lastIndexOf('/') + 1,
            req.url.length)
        const item = await controller.getItem(id)
        res.end(JSON.stringify(item));
    } else {
        res.end('hello')
    }
})

server.listen(1314);