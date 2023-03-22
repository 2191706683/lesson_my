- MVC
    - Model  数据层
    - View   视图层
    职责分离  MV 不能直接通信
    Control 来负责 逻辑 参数的校验 中间计算，用户session...
    路由 后端路由 用户从哪条路哪个method 进来，交给control

- KOA
    极简的node 开发框架
    - context = req + res
    - 中间件
        函数 
    
## 后端思维
    MVVM -> MVC
    view 有html 而且是完整的html  + DOM(原生js  jquery)编程
- 3000
    后端安全的一部分？
    配置化

- 洋葱模型
    koa 提供服务和架构的本质，node服务器编程的简单
    123456
    - 每个函数，交给app.use 调用都是中间件 middleware
    - 每个middleware 中都能拿到ctx next 等参数
    - 按照顺序执行 从上到下 
      如果遇到 ctx.response.body 会响应数据
        如果不是最后一个，要给next()
        最后一个的话，它会沿着洋葱模型 执行一遍
        不同的用户，不同的任务，不同的中间件需求
        像数组 数据库链接中间件 肯定要在路由中间件前面
    - 如果到了最后一个中间件仍然没有结束的话，它会沿着洋葱模型回溯执行

- koa 路由
    1. app.js 单点入口 模块化，
    2. routes 目录 定义路由
        使用restful-api  名词 + 动词
        /posts  GET  POST  DELETE PATCH PUT
    3. 路由是作为中间件 启用
        ctx.req  请求行 http 版本号  url  method 
        多个路由中间件 
        如果url method 和当前的洋葱模型执行顺序里的路由中间件匹配，它就进入控制器函数执行
        若不匹配呢？ next

- koa的 view 层
    1. 传统的MVC
        经典的后端架构方案和设计模式
        router -> controller(数据准备， 逻辑) -> views(html)
    2. ctx.render
        ctx 代表上下文环境 req + res 
        省略 response
        ctx.render = ctx.response.render
    3. views 目录和 view 层
        配置一下
    4. 使用ejs 模板引擎
        {{}}
        <%= %>
        for
        模板编译后 完整的输出给浏览器
        相比较前后端分离，它只有一个挂载点
        只有vue的 component 动态
        - MVVM 大型项目，大公司团队协作
            前后端分离 更适合 应用打开更快，体验更好， 不用白一下
        - 前后端分离缺点是啥？
            SEO 极其差  #root  百度 不会解析js 或者 ajax数据
            对于手机app里 无所谓SEO的，以体验为先 Mobile First
            掘金  csdn  搜狐  非常在乎SEO 不适合
            难道 掘金就要舍弃vue MVVM 回归MVC 吗？
            服务器端渲染的VUE Nuxt.js
        - MVC 优点SEO很好
        - koa-views 中间件挂载到app上
            - 配置views 所在
                ctx.render 指定模板的名字
            - 指定模板引擎 ejs pug
                <%= %>
            - 洋葱模型顺序  views 中间件 功能准备型中间件 放置在路由中间件前面
        - ctx.render
            模板在服务器端编译 返回所有的hmtl 对SEO 很友好
                爬虫 也是通过发送请求来建立内容分析 curl 
        - PC 端入口在百度
        - 移动端在应用市场 MVVM

- meta viewport
    SEO 要注意meta 标签的使用
    head 里 meta 通常用来丰富页面的信息和属性
    desc 
    keywords  掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python
    viewport 用于适配 PC端不用
    移动端 init-scale=1.0 width=device-width user-scalable=no
    乔布斯 开创了移动时代，PC更多，user-scalable 两个手指 缩放页面
    1024px  PC   -> 750 手机 很小？ 放大
    现在过时了 Mobile First user-scalable=no  禁用缩放
    缩放有时候会误操作 触发回到上一页或者下一页
    www.taobao.com -> m.taobao.com  发起一个301跳转
    PC 一套 nuxt
    移动端mobile 单页应用SPA

- 静态资源koa处理
    - css js image  静态资源
        - 不归路由（逻辑，数据库，服务器端内存等）管 服务器集群中
        - 前端写的绝大部分都是静态资源 webpack vite 打包 dist/
            未来会单独放在cdn 服务器  前端缓存
    - 单独处理静态资源路由
    - http://localhost:3000/index.css
        静态服务器 static + 缓存cache koa-static-cache
        - / 动态服务器路由， 首页
        - / 静态服务器  静态服务器中间件放在 路由前面
            / -> 配置的  /public
        - 时间内，客户端不用再请求， http 优化的重要理解
            200 第一次
            2..  304 NOT Modified
            MaxAge 一定会去服务器再请求， 再更新

- 登录的用户体验
    - keyup 事件 enter 提交  手机 Enter  虚拟键盘
    - 做好校验
        前端做了（用户体验，及时提醒），后端还要做（js可以禁用，后端不信任前端传的任何东西）  为了数据安全
        密码重复 在前端 后端都要做？ 后端对数据安全担负第一责任

- 文件对象是html5的重大功能
    - 提供了File 对象
        文件在上传到服务器之前，它就可以访问到本地的文件 类型 大小 等
    - 提供了fileReader 对象
        异步的从硬盘读取内容到内存，并且可以以URL，base64，blob的形式
        提前看到图片， 上传
        文件大小比较大的时候，用户需要等好久才能上传完，如果没有交互体现正在上传的话，
        用户会很焦虑

- bodyParser 中间件
    POST请求 和 GET请求不一样
    GET 查询参数 在请求行就已到位
    POST 有请求体，（请求头部信息有length）在网路层会分包分段传输 路由中间件之气要加 请求体数据包收集中间件
    bodyParser 一直 await 收集 == length next()
    1 next() 2

- node 做后端
    优点是 异步 与其他后端语言不一样的 性能好，no blocking
    一台服务器，上限是同时在线5000人，服务器是并发的nginx/tomcat
    php/Java/python 同步的 blocking 在sql请求(I/O)耗时任务中 占据线程
    node  异步的， 有event loop  在sql请求(I/O)耗时任务中 进入 event loop
    nginx/tomcat   线程就会被释放 不会阻塞(no blocking) 
    node可以省掉很多服务器，支持高并发
    java c++ 有多线程
    node  单线程 跟法师一样脆 服务器容易崩 一崩了之后所有用户都不响应 做到try catch
    pm2 进程管理工具

- 文件上传
    1. 上传到服务器端
        哪个文件夹?  static-catch 静态服务器， 缓存
        缓存  /public/images/
    2. 之后是可以访问的
        静态服务器
    3. fs  模块 写入
   
- mysql 业务处理方式
    1. MVC 的model 层 
        lib/mysql.js 简版
        在控制器中调用
    2. 数据库驱动  mysql2 翻译 
        驱动mysql 为程序工作 I/O 操作
        createPool
        getConnection  链接数据库
        release        断开数据库
    3. 封装了通用的query 方法 sql data
    4. 提供各种业务 sql 封装函数
        - 检测users表是否有某用户 select count(*)
        - 插入一条用户记录    insert into 
- 登录功能的细节
    GET / signin  表单
    验证表单
    ajax 提交表单  POST / signin  { }
    bodyparser post 表单
    后台登录路由
    后台登录控制器
    后端验证参数
    sql 查询操作
    种cookie  session
    
    http 带上cookie session 解析出相应的对象
    


