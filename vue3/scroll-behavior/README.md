- 何时退出？
    路由钩子 beforeEach

- vue-router scrollBehavior
    - 用户体验细节和性能优化
    - 使用 router-view 借鉴vue3 提供的composition api
        router.beforeEach()  类式编程
        onBeforeRouterLeave  composition api
    - router 单例中
        createRouter
        scrollBehavior((to, from) => {
            to.name
        })

- 第二种解决方案
    vue 性能优化  vue-router 的概念变了下
    A -> B
    A 页面destory unmounted 内存中回收组件  
    B  在内存中生成 -》 mounted 挂载到页面上 
    keepAlive 扑克牌的层叠关系
    A -> B  A不销毁 B盖到A上面
    B -> A  B退出， A 直接显示


