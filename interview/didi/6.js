// 
// 并行 / 串行
// p1 p2 一起执行
// es6 generator 生成器 yield
// 如何改成并行 Promise.all()
// async () => {
//     await p1;
//     await p2;
// }

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2)
    }, 200)
})

/* - 语言并发能力，java c++ 多线程 js
 *      setTimeout  i/o xhr
 *      js 使用了 EventLoop 实现并发 异步
 *      callback + 串行
 * - promise  thenable callback 回调地狱
 *      编写顺序和执行一致
 * - async await
 * - 并行 Promise.all/race
 *      Promise.all 返回值也是一个promise 
 *      如果Promise.all失败了之后，如何可以拿到成功的值呢？
*/
const func = async () => {
    // try {
    //     var result = await Promise.all([p1, p2]);
    //     console.log(result);
    // } catch (err) {
    //     console.log(err);
    // }
    var result = await Promise.allSettled([p1, p2]);
    console.log(result);
}

func();
