# 手写webpack

- 依赖关系
    - webpack vite 的本质？
        1. mian.js 类似的入口
            单个文件的视角
            index.js -> module  test.js -> babel -> 分词 抽象语法树 AST -> import 2 require
        2. 整理出来依赖关系
        3. build 一个文件
            word.js -> message.js -> index.js

- boss 你好，我vue/ts/node挺好的，平时喜欢看源码，leetcode也刷了蛮多的，我对贵公司的前端研发岗挺感兴趣的，可以安排下面试吗？