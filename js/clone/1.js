// const clone = require('./util')  //commonjs
import {clone} from './util'  // es6

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target // 循环引用 栈溢出 递归没有了退出条件
// console.log(Object.keys(target))
clone(target)
// JSON.parse(JSON.stringify(target)) // 不行