# 函数篇
- 函数记忆功能 
    1. 函数的参数或者说函数的返回值也是函数的话， 我们称之为高阶函数
        memorize 高阶函数
    2. 使用js特性中的闭包
    3. 巧妙的利用缓存，它是我们提升性能的关键
- 闭包是如何形成的？
    1. 函数嵌套函数且运行 
    2.

- 记忆函数
    1. 用空间换时间  cache{  }
    2. 使用key 
        arguments.length + Array.prototype.join.call(arguments, ',')
        不能处理参数是对像这种情况，原因是 [Object, Object] join 本质， 会先调用toString
    3. 因此，memorize函数需要优化