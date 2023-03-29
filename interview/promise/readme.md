# Promise A+ 规范

- Promise 类 then catch 
resolve reject all race finally...
- 传一个参数，函数， 也叫executor, 立即执行
- executor 有两个参数， resolve, reject 函数
- 三个状态 pending fullfilled rejected
    不可以多次执行同一个promise
  - pending , 可以转化为fulfilled 和 rejected
  - 成功时, 不可转为其他状态, 且拥有一个不可改变的值
  - 失败时, 不可转为其他状态, 且有一个不可改变的原因
  - executor 报错 

- then(onFulfilled, onRejected)
    - state 为fulfilled, this.value ->
    onFulfilled 运行
    - rejected this.reason -> onRejected

- then
    1. 如果异步, 先存储起来, 当状态发生改变, 执行一次
    2. .then解决了回调地狱问题
        要控制执行顺序  then 链式调用
        前一个的promise then 怎么执行下一个then?
        要return 一个 promise 2 Object
        promise value 
