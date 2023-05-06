# 跨域方案

- JSONP
    DOM script 不受跨域限制的
    只能发 GET 请求
    服务器端 返回js  XSS 跨站脚本攻击

- CORS
    Access-Control-Allow-Origin
    Access-Control-Allow-Method  更多方法
- postMessage
    - html5 postMessage 实现跨域消息通信
    - 主页面 window.open 或 iframe
        启动一个他域的页面
    - 消息通信 基于订阅与发布者模式
        targetWindwo.postMessage(mes, targetOrigin)
    - addEventListener('message', )
        event.origin 白名单
        e.source.postMessage(msg, e.origin)
    postMessage  要用户授权 知情权

    - websocket 双工的 不受跨域限制
        - html5 原生的WebSocket
        - node 安装 ws库
        - 通信不受跨域的限制
    - 代理？ proxy
        web -> 底层
        A       C       B
        vite
        proxy: {
            'api',
            {
                target: 'http://localhost:3000'
            }
        }



    