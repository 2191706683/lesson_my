# JS执行机制
- JS  为何而生？
    响应用户的交互， 添加一些事件， 简单
    有必要设计成为多线程吗？ 没必要 (多线程 JAVA C++)
    线程是程序运行的最小单元
    JS 设计为单线程 
        - 优点  足够简单 
        - 缺点
            有点脆弱
            让同步代码尽量运行完 那么耗时任务怎么办，于是引出了下述要点

- JS = 单线程 + Event Loop(机制)
    setTimeout fetch eventListener 是异步的， 放入Event Loop里

    同步代码快速运行，当它运行完了之后， js进入 idle 状态， 
    再等3s，会再次进入单线程运行