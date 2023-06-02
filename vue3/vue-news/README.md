- 数据流管理作为项目难点
    - 在做登录前端功能的时候， 碰到了(tabbar 我的， 订单)数据管理的需求，全局共享isLogin 
    - vuex  createStore 全局的登录状态
    - 再通过 actions mutations 实现登录和共享状态
    - 首页， 详情页越来越多的状态放在 store 上， 有点乱， 但实现了数据流和组件开发的分离
    - vuex  modules 可以分模块再五件套， 更好的模块化管理数据
        哪些是全局共享的， 哪些是模块共享的 
    - 在新的项目中尝试使用 pinia 来 管理 
        更简单（没有mutations ） ， ts 结合更方便  模块化更好

- typescript 难点 
    - 由于typesript 初学， 遇到了很多问题 类型不知道怎么定义
        后面去看了些文档
    - 按照vue3 组件响应式 props  数据流管理 等通用业务上的类型需要
        借鉴且尝试 
        v3-ts-hooks-management
    - news 模块的  ts 编写
        数据流管理部分的ts 比较复杂 ， 搞定后 ts 就写的比较顺了

- node 错误处理
    - 在最后面添加一个统一的错误处理中间件 
        status: 500
        mes: ''
        next 向后抛

- 使用了hooks 编程
    - useLocalStorage 这样的hooks 封装
        - 不只是逻辑封装， 
        - 响应式封装 vue 时代， 响应式/生命周期也是逻辑的一部分
        - 接触到 vueuse 开发效率大幅提升 比如useFetch
        - useHead App.vue 全局的头信息 每个页面要设置title
        - 

- 性能优化
    - 当页面有多个请求时， async await 可以转化为Promise.all([]) 并发
        加快页面显示速度
    - 按需加载 
    - 滚动加载  vue-lazyload  
    - 骨架屏 