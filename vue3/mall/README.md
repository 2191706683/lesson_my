# vue3 写商城 
- 简历需要 

- vue3 语法
    - 过滤器 filters 换了表现形式
        computed data -> 计算
        格式进行转化 进制转换 汇率 语言 
        入口可以配置多个过滤器
        app.config.globalProperties.$filters = {
            prefix(url) {
                if () ......
                
            }
        }

- 设计模式
    DRY  Don't repeat yourself
    代码在复制重复的时候  停下来
    组件 

- 工程化 
    前端工程化  运行在服务器端 node
    .vue   style  lang="stylus"  css  工程 stylus
    stylus -> vite -> npm i stylus -> css -> 页面上的css
    vite.config.js  vite 配置文件 工程化定制

- 组件化思想
    state  状态对象， 响应式  数据驱动界面
    常规的组件数据都放到state 中 由 reactive({...})
    子组件和state 诞生依赖关系  热更新
    components 组件 有利于 页面级别组件或大组件更好维护， template比较简洁
    维护好数据状态  正确
    - simple-header
        noback props 组件的复用和应用场景

- 商业应用npm包
    - vant  有赞， 移动商城组件库
    - lib-flexible   移动适配库
    - vue-router    路由

- 架构（目录的意义）
    vite  工程化  项目模板
    - src  开发目录
        - assets  静态资源目录
            css image 
            main.css  base.css  @import 模块化
    - views 页面级别组件
    - common 文件夹
        通用， 和具体业务无关，可以在任何页面，任何项目
        style  通用的样式
            - minxin.style
                专门放通用的混合函数的地方
    - service   api
        定义接口的地方
        方便统一管理接口 axios  baseURL
        每个页面的接口一个独立的文件  维护

- 异步解决方案
    - promise pending -> fullfiled
    - 同步化  流程难控制
    - es8 async + await  多个异步任务同步化的时候 thenable 要简化
    

- 全家桶
    - vue-router
        - redirect
            流程如下
            - path: '/'   -> /
            - 假如 component: Home.vue  200 成功
            - 但是 redirect
                没有直接给浏览器响应
                给浏览器发送了一个跳转指令
                再次发出请求？ 跳？ 3XX /home
- stylus
    css 全新写法， 写起来更快， 很多高级功能
    css的超级 vite
    - npm i stylus
        安装stylus css 预编译器
        用全新的写法来写css，stylus，帮我们自动编译成css

    - .vue  style lang="stylus"
    - 不用写{} :; 快
        写了也没问题
    - 表达父子元素的元素  css 模块
        缩进  自动的加上父元素限定
    - 混合mixin
        形式上是函数
        封装某个功能样式的集合
        混合到调用它的地方
    - 申明变量
    - scoped
        防止css 类名冲突
        给组件加data-v-hash唯一值
        选择器加上属性选择器
    - &.active
        & 引用上一级选择器

- main.js 入口文件，有哪些工作
    全局性的
    - 完整的vue 全家桶 
        router  spa 
    - 组件库 
        vant element3 element-plus 
        按需加载
        css库文件
    - css 准备工作
        - main.css
            - reset 
                - *, *:before,*:after 伪元素也要选中
                - 移动端box-sizing: border-box IE盒模型 更有利于布局
                - font-family  -apple-system   PC 微软雅黑   sans-serif
                - 高分辨率手机  扛锯齿 让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
            - 全局css 变量的申明  主题及样式的管理， 复用 
        - 图标字体库
            iconfont
            引入第三方 link

        - 移动应用 
            rem  适配  html fontSize 动态  1rem = 设计稿的多少？ 750px   1rem = 75  
            第三方框架 lib-flexible 
            Mobile First  80% 
            PC  工作 管理  后台 

- axios
    - 接口请求里的顺丰
        更专业
        接口返回的数据，再包一层 更好及更标准的的使用， 更丰富的请求信息
        http 了解更多
        axios 把接口返回的数据放在 data 中
    - 拦截器  interceptors
        axios request/response
        return res.data

- 骨架屏方案 用户体验优化
    skeleton vant 提供了这个组件
    <van-skeleton :row="3" :loading="state.loading">
        template 显示出来
    </van-skeleton>
    3251, 3,251

- 图片懒加载
    第一等 减少了http请求数
    - html 文件中 link src img script 启动新的http请求
        公路一样有限制的
        请求并发数 越多的话 页面加载就越慢
    - 可视区内图片加载
    - 非可视区内延迟加载 可视区滚动到哪里加载响应
    - vant 内置了Lazyload
        vue directives 指令集 自定义指令 v-lazyload
        命令组件或标签做相应的事情
        使Lazyload更简单直观
    - base64 png/jpg  更小 放到我们的css或js文件中 不需要png 而外的文件，
      有效的减少了并发数

- vue-router 细节考点
    - 懒加载
    - router-link  激活路由
        .router-link-active
    - 路由的跳转
        - 全局对象 Router vue-router  useRouter() 组件里随时拿到
            push go currentRoute
        - 当前路由  Router.currentRoute()
            useRoute() 当前路由对象
            route.params
        - useRoute()  使用一下  hooks函数 编程
            use开头的函数的称呼
            vue vue-router vuex ... useRoute  方便我们的使用，函数的方式
            composition api 结合的很好
    - 路由切换的动画
        vue transition
        slide-left slide-right
        首页  ->  detail
        transition  由右向左
        detail  ->  首页   由左向右退出
        1. 路由切换加transition
            <transition>
            </transtion>
        2. vue 内置了transition 组件
            v-if  v-show router-view  挂载和卸载
            挂载的时候给我们组件添加 .v-enter-active true 不用像之前的例子那样去:class
            .v-enter-active {
                定制的能力很高
            }
            卸载时false 自动添加 v-leave-active
            transition name 支持自定义

- 详情页技术内容
    1. 用户在编辑器里编辑
        content  长文  html 片段
        固定的介绍 + 创意的用户编辑内容一起组成
    2. 幻灯片 数量 大小
        要做延迟加载
    3. key 唯一值的意义
        vue 循环绑定一定要给一个key，不然就会 warning
        其中的某一项修改时，不可能替换整个数组，DOM更新开销大
        数组对应的列表渲染 不能做 DOM 编程
        数组 和 DOM 要局部热更新的 唯一值的对应
        不能用index ？ 涉及到unshift新增，中间的插入 排序
    4. v-html
        详情页内容 多数时用户编辑的， 存储的形式是html格式
        vue 不会之直接把html字符串 显示，转成普通字符串
        安全， 跨站脚本攻击 不完整的html
        v-html  负责安全性
    5. vant 的底部购物组件套装
        badge 徽章  跨页面共享状态 vuex
        












