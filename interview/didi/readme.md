# 滴滴实习

- 滴滴的难度如何？
    - 比较简单，
    - 比发展快，薪资高的公司 容易
    - 扎实的前端基础
        20%的高质量 完整度 惊喜讲出来
- 投递策略
    1. 定向投
    2. 投多个

- css 的布局有哪些？
    回答思路：需要的各种布局，从文档流 -> 两列/三列布局 -> 新的BFC(弹性/网格) -> 相对（定位） -> table布局

    - 三列布局
        - 块级元素默认从上到下
        - 脱离文档流或开辟新的BFC（Flex，inline-flex, display:inline(高度宽度不可以，所以用inline-block有空格设置font-size为0)）
        - 浮动
            圣杯和双飞翼
        - 中间列要能够宽度自适应
        - 中间列要优先渲染
        - 弹性布局
            简单 兼容性 flex：1

    - 流式布局 Flow
        默认布局方式 元素从上到下 从左到右布局
    - 浮动布局
    - 弹性布局 阮一峰
    - 网格布局 display: Grid
        复杂的行列布局 九宫格
    - 绝对定位布局
        通过设置元素的position属性为absolute或fixed，在父级元素中的位置即使改变也可以不变
    - 表格布局

- es6  symbol bigint
    7 种加
    新的数据结构 Map/Set WeakMap WeakSet
    js 数据类型
    - 如何判断数据类型
    - symbol 的用法，应用场景
        唯一的
        - 对象属性名的定义
            大型多人项目中 不会覆盖原有属性方法
        - 不重要的属性不出现在对象遍历中
            Object.getOwnPropertySymbols()
        - 类的私有属性或方法
            1. es6  目标js 成为大型企业级语言，需要提供 private 能力
            2. 约定大于一切 _method()
            3. 类的开发者和使用者的解耦
                类复杂的话，开发者没有必要，隐藏一些复杂的细节，不能被调用者随便调用的，
                公有方法  简单的， 好用的
                私有方法  难的，  有规矩的，使用者没必要去搞的，
                Symbol()  使用者 不可能去调用  加大了使用者犯错的难度

- js 判断类型的方法
    - typeof 
        null  Array Object 子类型
    - instanceof
        构造函数在对象的原型链上
    - Object.prototype.toString.call()
        子类型
    之外，假如我们还要添加新的数据结构判断能力
    - isSet  isMap

- 滴滴面试题 Promise
    1. 异步 node 异步无阻塞
        同步代码 瞬间执行完 + cpu 轮询的概念
        异步代码 耗时 event loop  js + 前端 / 后端
        单线程保证了语言的简单易学，无阻塞
        callback 执行的顺序得不到保障
        串行 回调地狱问题  要有执行顺序，代码的可读性提升

    2. Promise  thenalbe 链 -> async await 多行
    3. 并行，提升性能和效率
        Promise.all([]) Promise  
        async await  没有catch
        Promise.allSettle  status + value/reason

- ngnix
    Nginx 是一款高性能的Web服务器和反向代理服务器
    1. www.baidu.com:3000
    npm init vite  vue 3000
    http://www.baidu.com  -> 80 http
    https://       -> 443

    ```
    server {
        listen: 80;
        location / {
            proxy_pass  http://localhost:3000
        }
    }
    ```

    2. 负载均衡 ngnix  不负责应用的 只负责调度
    upstream backend {
        server  backend1.example.com;
        server  backend2.example.com;
        server  backend3.example.com;
        server  backend4.example.com;
        ···
    }

    3. https 的配置
        用户 ->  nginx  ->  restful  -> 
        加载https SSL  证书和私匙





- 输入URL  到页面显示
    提词器：网络 解析  渲染
    - 网络
        1. DNS 解析
            分布式数据库 KV 缓存  IP地址
        2. TCP 链接
            三次握手 SYN  SYN/ACK  ACK
        3. HTTP
            请求头  请求体
        4. 服务器资源处理，响应用户内容
    - 渲染
        1. HTML 解析
            DOM  树
            同时CSS  JS  加载也发生
        2. CSS解析
            CSS 规则（CSS OM 树）与DOM 树绑定起来，生成渲染树（Rending Tree）
        3. 布局和绘制阶段
            每个元素在页面的确切位置和大小，将渲染树与布局信息进行合并，得到绘制树 Painting tree

    - 强调优化策略
        1. 减少http请求数 图片的懒加载  base64
        2. 压缩资源文件 webp nginx gzip 压缩
        3. 缓存 强  协商
        4. CDN
        5. 骨架屏

- get post 区别
    HTTP 请求的两种方法，用于向服务器提交数据和获取数据
    需要 安全性
    - GET 请求通过URL 传递参数，POST 请求通过HTTP 请求体传递
        GET 长度有限制的
    - GET 请求在URL 中直接可见，不安全，中间人 HTTPS
        POST请求 加密的 安全
    - GET 请求 可以被缓存的资源
        POST  不可以被缓存

- 浏览器缓存
    - 主要针对前端静态资源，大大的减少了HTTP请求数，提高了网站的性能（服务器CPU，带宽，内存）
    - 强缓存
        设置响应头 请求头 
        HTTP 1.0   Expires
        HTTP 1.1   Cache-Control:max-age=xxx
    - 协商缓存
        1.0  Last-Modified   if-modified-since
        1.1  Etag            if-none-match
        - Etag 精确度更高，文件hash 计算
        - 缺点是 计算耗时成本高 

- 数据api，以及项目中使用场景
    - push 一个或多个元素
    - pop 删除并返回该元素
    - shift 删除第一个数组元素，
    - unshift 数组头部添加一个或多个元素
    - concat  合并多个数组成为一个新数组
    - splice 本身删除 + 添加 （起始位置，需要删除的元素数量，需要插入的元素）
    - slice ()
    - forEach
    - map  filter  reduce
    使用场景 + 抖包袱
    - 数组去重

- forEach map 区别， 使用场景
    - forEach 传统遍历 没有 返回值
    - map 遍历每一项，返回一个新数组

对象的每一项加一个属性，用forEach 还是map？
    map 复杂，forEach 引用式简单

- 闭包以及项目中的作用
    函数能够访问外部的自由变量
    函数嵌套函数 内部的函数要返回
    - 防抖节流
    - 柯里化 add(1,2,3,4,5) add(1)(2)(3)(4)(5)
    - 缓存  函数计算的结果  记忆函数
    - 私有变量 方法
        const fn = (function() {
            const f1 = () => {} // 私有方法
            const a = 1; // 私有变量
            return () => {
                f1();
                a;
            }
        })()

- vite webpack
    - vite  浏览器原生的es module 机制 边运行边编译 依赖的最小单元 go
        热更新
    - webpack  需要把所有代码打包 生成dist.js 慢 先编译再运行 node
        代码修改
        
- js 模块化
    common.js (AMD, CMD, UMD) esmodule






        













