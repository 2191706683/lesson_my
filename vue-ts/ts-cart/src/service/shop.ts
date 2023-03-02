// js 如何提升数据的完整性
// let num: Number = 1112
// num = 'ddd'
// 接口 接头
/* js 为什么没有 interface ？
 * js是弱类型语言， 
 * js 有太多的糟粕 
 * 接口肯定也没有
 */
/* interface的作用是什么
 * 检查数据，代码在运行前就报错
 */
// SQL定义表
// VSCode 是用 ts 写的，对ts非常友好
// js 有时候错误都不知道怎么发生的
export interface IProduct {
    id: number,
    title: string,
    price: number,
    inventory: number
}
const _products :IProduct[] = [
    { id:1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 }, 
    { id:2, title: 'H&M T-Shirt White', price: 10.99, inventory: 2},
    { id:3, title: 'Charli XCX -Sucker CD', price: 19.99, inventory: 5}
]
const wait = (delay: number) => {
    return new Promise((resolve,reject) => {
        setTimeout(resolve, delay);
    })
}

export const getProducts = async () => {
    // 延迟加载
    await wait(1000)
    return _products
}

export const buyProducts = async () => {
    await wait(1000)
    return Math.random() > 0.5
}



