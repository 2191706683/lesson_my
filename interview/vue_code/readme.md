- 组件通信
    - 8 种
        - props / emit
        - eventbus vue2.0 3.0废弃了 事件总线
        - provide inject 崛起
        - ref/defineExpose
        - vuex/pinia
        - localStorage
        - $parent $child
        - $attrs + props = 父组件传过来的所有数据
    - 3类
        父子
        兄弟组件
        跨层级
    - 底层原理是什么
        设计模式 订阅发布者模式

        - provide

- EventBus
    vue 2.0 new EventBus 基于事件消息机制(on 订阅 emit 触发 )实现通信
    vue 3.0 结合 mitt 第三方EventEmitter 库也可以
    provide + inject 代替了他们






