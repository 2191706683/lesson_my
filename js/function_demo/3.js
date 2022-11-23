// 变量的作用域  
var name = '龙' // 全局
function func() {
    var name = 'jay' // func 内部 局部变量
    {
        let name = '涛' // 块级作用域
    }
}