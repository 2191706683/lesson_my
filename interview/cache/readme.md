# 前端性能优化最重要 -- 缓存

- 静态资源缓存
    304 Not Modified

- sd
    200 返回资源  花费时间
    走缓存

- node 的理解
    1. 如何返回 html 模板？
        硬盘里 fs 读出来  之后是字符串
        fs.readFile  异步的，不会阻塞node 单线程 node 的eventloop
        同样硬件的能力下 多让一些用户访问 服务器价格便宜
        index.js 内存 -> fs(I/O) -> 硬盘 -> 回调函数 -> 第一个参数是err（文件路径存在，固态硬盘和机械硬盘的区别），第二个参数是data数据

    2. readFileSync 同步， node支持同步，但不太常用，性能不好
    3. 流的概念
        二进制文件的处理思想
        fs.createReadStream()
- 图片格式
    jpg png (透明)
    webp 同样的清晰度，体积只有1/2 1/3

- 缓存
    1. 服务器端开启缓存  强缓存
        - 返回资源的同时， Expires , 给予过期时间  setHeader('Expires', 时间)
            本地缓存这个图片的时候，会带上 Expires 写入
        - 再次请求 /tow.png 前端缓存就挡道  有没有缓存
            本地时钟和缓存的 Expires 时间比较  如果还没到时间，强制走缓存或则走后端
        - 本地时钟不准确 Expires 不准确
    2. 浏览器的文件系统
    3. HTTP 1.1 更新 Cache-Control  相对时间
        maxAge  倒计时 

- 强缓存
    expires  http 1.0
    cache-control max-age

- 缓存过期了怎么办 一定要重新请求吗?
    强缓存过期 但是服务器端文件 变了或者没变

- 协商缓存
    Last-Modified + If-Modified-Since
    Etag +   If-None-Match 
