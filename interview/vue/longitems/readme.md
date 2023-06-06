# 虚拟列表

- 假如有10万条数据如何渲染
    - 大数据
        异步
        内存放得下
    - JS 执行时间
        DOM 编程 createElement appendChild
        同步的 
        超过了 JS 单元运行时间 CPU 轮询
    - 渲染时间 +
    
    - 分片机制 时间分片 
        requestAnimationFrame 宏任务
        requestIdleCallback  react fiber 微任务 大的DOM 树
        如何查看开销时间
        如何去看浏览器的面板和优化建议

- 第一个同步的console.log() JS 单线程
    尽快执行完 idle阶段
    requestIdleCallback  unit time
    setTimeout(,0)
    定时器在js中不准确 0 - 20ms
    渲染时间

- chrome的performance 面板可以直接提供
- 除了时间切皮还可以怎么做？
- 虚拟列表
    getBoundingClientRect()
    何必一次性渲染那么都列表呢
    只渲染可见部分的 + onscroll 响应式的 startIndex  endIndex