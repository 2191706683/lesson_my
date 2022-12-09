function a() {
    let c = 1
    return function b() {
        // 作用域包
    }
}

const funcB = a()
funcB() // 运行时可以找到定义时上下文环境的变量