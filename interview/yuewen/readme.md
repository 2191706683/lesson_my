- ssr 怎么理解
    ssr 服务器端渲染 seo
    - 响应式，模板 数据 在服务器端编译
        await service  mysql
        await vue  compile
        response -> client html string
    - client
        生命周期 事件监听... 在客户端执行

    1. web 服务器 express
    2. vue 在node 环境下运行 并通过Vue.createSSRApp() 编译生成服务器端 app对象
    3. @vue/compiler-ssr 服务器端模板编译
    4. @vue/server-renderer 将 服务器端vue app 对象调用  renderToString() 生成html 字符串，并由express res 对象返回客户端
    5. 客户端再执行 相应js 文件 完成 事件提交，页面渲染，生命周期等前端业务
- 垃圾回收
    内容管理机制，确保 js 执行效率和稳定性

    - 引用计数法
        简单的垃圾回收算法 给对象关联一个引用计数器，引用对象时 + 1，失效时候 -1 -0 时，可以回收

    - V8 js 引擎，没有采用引用计数法，无法解决 js 的循环引用问题
    1. 分代回收
        新生代  young generation  短期存货对象 （大部分）
        老生代  长期存活对象

    2. 增量标记
        垃圾回收时，v8 会先暂停js 执行，
        垃圾回收拆分成多次 减少暂停事件
    3. 内存限制
        对内存进行了一些优化和限制， 对大对象和字符串进行了特俗处理

- 合并两个有序链表
    