const express = require('express')  // 简单的node 服务器开发框架koa的爸爸
const app = express() 
// const cors = require('cors') // cors 的封装
// 白名单   
// var whitelist = ['http://127.0.0.1:5500', 'http://localhost:8888']
// var corsOptions = {
//     origin: function (origin, callback) {
//         // console.log(origin, '//////')
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     }
//   }
// app.use(cors(corsOptions))


// node 在所有的请求  和响应中间加上一个功能  中间件
// 从请求到达开始
//     想吃点啥？  服务员  解析参数
//     做饭       厨师     取数据
//     结账      老板娘    
// 以响应用户结束，发送内容
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     next()
// })
app.get('/say', (req, res) => {
    console.log(req.query, '////////')
    let callback = req.query.callback || 'callback'
    let obj = {
        name:'况总',
        spec: '家里有矿，有水塘'
    }
    // 告诉用户浏览器使用utf8 来显示
    
    res.setHeader('Content-Type', 'text/js;charset=utf8')
    res.end(`${callback}(${JSON.stringify(obj)})`)
})

app.get('/other', (req, res) => {
    let obj = {
        name:'胡总',
        spec: '来包池子'
    }
    // 告诉用户浏览器使用utf8 来显示
    
    res.setHeader('Content-Type', 'text/json;charset=utf8')
    res.end(JSON.stringify(obj))
})
app.listen(3000)