# 组件

- 从何而来
    js/DOM API等 -> jQuery(高效/兼容性) -> template lodash compiler -> VUE template/script/css

    html -> template  业务的focus -> 数据驱动 -> reactive -> mounted + updated -> effect(compiler)
    -> vnode -> diff 前后状态的差异 -> dom 更新

- 组件生成什么？
    - render template {{}} v-if :  VDOM  产出 -> createElment
    - reactive ref  setup
    - 生命周期 
    - VDOM
    - diff

- Component 类  函数  -> render -> 真实的DOM
    组件化思想 -> reactive diff  数据驱动思想 -> final  createElement

- 组件前身的本质 是根据数据得到html内容
    VDOM

    Component （VDOM）
        +
    render 方法 { type, props, children } createElement

- 组件的产出是 Virtual DOM
    - 分层
        平台无关性  VDOM -> patch -> html/wxml/xml
    - 性能优化
        查找 比对 在内存之中高效的收集差异


        
