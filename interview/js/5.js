// 手写的时候，es6 版本会比老版本更优雅
Function.prototype.call = function(context, ...args) {
    context = context || window
    const fn = Symbol('fn') // 返回值是唯一值
    // 给context动态添加了fn属性 
    context.fn = this // 有了fn之后绝对不会覆盖context上的属性

    /* let args = [] // 函数原来的参数
    for (let i = 1, len = arguments.length; i < len; i++) {
        // args.push(`arguments[i]`) 
        args.push('arguments['+ i + ']')
    } */

    // console.log(args, '////')
    // 返回值？
    // let result = context.fn(args)
    // let result = eval('context.fn(' + args + ')')
    // 只有读源码，写源码的才会用到eval
    let result = eval('context.fn(...args)')
    delete context // 让context 干净 代码洁癖
    return result
}

const me = { name: 'Jack' }
function say() {
  console.log(`My name is ${this.name || 'default'}`);
  return 111
}
console.log(say.call(me, 1, 2, 3))