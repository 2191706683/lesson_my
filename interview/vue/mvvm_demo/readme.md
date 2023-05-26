- 何为mvvm？
    - 一种软件架构设计模式，简化用户界面的事件驱动编程方式
        - 用户界面工程师
    - 前端也有了自己的Model层 api/store
        前后端分离 路由和数据
    - 核心是ViewModel 层 中转站
        响应式  组件化
        数据便于管理和使用 data()  computed watch
        store
        向上与视图层进行数据单(双)向数据绑定  VDOM 不做DOM编程
        向下 通过接口与model层 数据交互

    view 用户界面  视图层
    model 数据模型层 后端进行的各种业务逻辑处理和数据，前端 api vuex
    ViewModel 解耦了 view层 和 model层

- webpack 调试错误
    提前打包了，babel -> preset-env  代码面目全非
    出错了，不能给我们定位到源码位置

    bundle 和 源码的映射关系  source-map

- vue 2.0 响应式
    1. defineProperty 循环和递归
    2. 给那个defineProperty descriptor 拦截器 分配一个依赖关系收集器 Dep 实例
        Dep 维持了订阅发布者关系
        读操作，写操作 找到对应的 defineProperty descriptor  也就找到了对应的Dep，执行
        get Dep.target = watcher(node, callback)  addSubs subs
        set 闭包 中找到响应的dep dep.notify 通知所有的watcher update
    3. Dep 依赖关系收集器 dependencies
    4. Watcher 订阅者

