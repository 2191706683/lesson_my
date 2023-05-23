# 求第k 大数
    O(n)
    leetcode 215
    快排的变体
    快排 pivot
    小于pivot  pivot值  大于pivot
    每个部分的长度

- git merge 和 git rebase区别
    多分支开发的时候 开了叉
    - git merge
        master
        feature
            分叉了 commit 3
        切换到 master git switch master
        git merge feature
    - git rebase
        首先切换到 feature 分支
            commit 3
        切换到master
            git rebase feature
            transform-origin 变基
            feature 分支的所有提交 在 master 上都做遍
            提交历史记录成直线

- 在大厂协作中，leader 是通过查看代码提交记录来了解项目和我们的工作进度
    git merge 生成新的节点 达到合并代码的目的，但是分支一多，master 代码提交记录就n多分叉
    git rebase 解决了这个问题，把要合并的所有提交都拷贝一份，让主分支不在分叉，一条直线，提交记录可读性良好


- requestAnimationFrame 和 requestIdleCallback 区别
    都是时间分片机制的实现
    - 长列表 渲染
    - three.js
    - 复杂动画

- 宏任务和微任务
    - requestAnimationFrame 会在浏览器下一次的重绘前指定回调函数，每秒60次
    属于浏览器的宏任务
    - App.vue -> 一堆组件（层级） -> mounted 接近一个执行时间单位
    - 主动去释放对runtime 的控制
        react fiber 机制 requestIdleCallback 时间分片

        ```
        function lazyLoadImages() {
            <!-- 如果同时需要加载很多的话，很耗性能 -->
            <!-- images 有点多 -->
            const images = document.querySelectorAll('img[data-src]');
            Array.from(images).forEach(image => {
                <!-- image -->
                requestIdleCallback(() => {
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                })
            })

        }
        ```

- 如何判断两颗二叉树是一样的
    - 树 递归的概念来定义

- 打包优化做了哪些
    减少代码的体积 加快打包的速度 优化程序的性能 提升用户体验

    - 代码压缩和混淆
        js 压缩 UglifyJS / Terser(webpack 5内置); sayHello s();
        报错了怎么办？dev-tool:'source-map';
        代码混淆增加了 代码的安全性
        css 压缩
        cssNano MiniCssExtractPlugin css 从js 抽离出来 单独打包
            CssMinimizerPlugin 压缩
            scoped 带来css 的安全性
        webpack5 在生产阶段直接支持
    - gzip 压缩
        HTTP 2.0

    - treeshaking 去除无用代码
        webpack可以基于es6模块化 静态分析无用代码

    - 图片压缩
        1. 较少的http请求数 用户体验 图片打包时打包大小的很大一部分
        < 8kb base64
        test: /\.(png|jpe?g|gif|webp)$i
        parse: {
            dataUrlCondition: {
                maxSize: 30 * 1024
            }
        }
        2. webp 批处理
            node webp 的处理程序

    - webpack code splitting 只加载当前所需的模块，
        import()  按需加载
        vue3 composition api 函数式

    - 框架按需加载
    - 图片懒加载 vue-lazyLoad
    - 使用cdn加载 vendor js css

- 淘宝跳转到天猫 为什么不需要重新登录
    www.taobao.com www.tmall.com
    企业级的登录机制
    - 单点登录 SSO Single Sign On
        - 从淘宝  登录 包含一个包含用户授权信息的令牌 Token
            Acess Token
        - 放到 cookie里
        - taobao tmall 同一家公司，会像.com 等级域名服务商备案
            在tmall 也可以读取并传输 samesite
            
    OAuth 2.0 协议
    - 微信授权？
        公众号
        - 用户安全

        B端<------>微信 (oAuth Access token) <--------> 用户











    
