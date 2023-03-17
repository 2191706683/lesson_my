# websocket

- HTTP 优点和缺点
    优点
        简单  请求和响应  无状态
    缺点
        http的1.0  cookie
        单向的， 服务器端不能主动推消息

- http 不能主动推消息，但websocket  可以
    websocket属于html5版本的新功能
        html5新功能有
            - 语义化标签
            - form 新的input 类型
                type="number|range|" placeholder required
            - video audio  canvas
            - localStorage SessionStorage  IndexDB
            - drag drop
            - lbs 获得用户的地理位置信息 geolocation
            - web workers js 多线程
            - websocket 实时通信
            - Blob 二进制流对象
            - File 对象 FileReader

- 使用http协议启动web服务， 得到首页 得到了首页之后意味着与服务器断开连接
    - a 链接 重新请求  服务器处于被动的伺服状态 
    - ajax的本质仍然是http 
- webSocket 启动了 webSocket 请求
    - 建立链接
    - 双向通信
    - 
