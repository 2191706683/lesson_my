# 大厂快速路 数据可视化

- 认识数据
    十万条数据要在页面上，展示怎么办？
    table ul>li
    构建DOM 树 css渲染树 显示页面
    分页 table + pagination
    滚动到底部加载更多 better-scroll

- 确定任务
  增强数据的可读性 最好的方式是使用图表

- 方案 条形图
    x name
    y value

- 技术方案的选择
    - canvas 20 画图方案  绘制API
    - SVG  矢量图
    - webgl  3D

- 数据整理 
- 绘制API canvas
- canvas 是画出来的 像素
- SVG 数学图标声明出来的， 无限拉开
    声明式

- 为什么Vue 不用DOM 编程？
    太耗性能  
    浏览器的原理相关
    页面渲染 html/css
    js 执行 由另外的进程管理

- SVG Canvas 区别
    数据简单， SVG优秀，但SVG的缺点是性能不好，频繁的操作DOM, SVG 依托标签来完成功能
    canvas 绘图API 更丰富 GPU 负责 性能  大数据 复杂图标的展示
    API 有点多，底层很那啥？ echarts



