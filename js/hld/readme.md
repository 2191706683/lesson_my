# 红绿灯
    1. 时间切换





1. Promise 类
    class Promise {

    }
2. 传一个executor 函数 , 并且立即执行
    constructor  executor
3. executor 异步任务, 提供resolve 或reject 的能力
    - resolved  this.status pending -> fulfilled
    - then Promise 就得添加一个方法
4. 如何封装 resolve 函数  异步思想
    then  函数, 把他存到
    this.onResolvedCallback = cb  多存了
    resolve  this.status = 'fulfilled'
    this.onResolvedCallback(data)