// 内存分配  放在栈内存  stack
let x = 1,  // 简单 
    y = 2;
let c = x  // 值的拷贝 
    c = 5
console.log(x)
// 内存分配  对象放在堆内存  heep
let o = { name : '叶' } // 对象 引用传递
let b = o // 不是值的拷贝， 引用
b.name = '飞飞'
console.log(o.name)
let z
z = x
x = y
y = z
console.log(x, y)