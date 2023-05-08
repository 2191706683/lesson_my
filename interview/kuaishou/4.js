// 闭包 自由变量
function creaeteReapt(fn, repeat, interval) {
    let counter = 0;
    const intervalId = setInterval(() => {
        fn('hello world');
        counter++;
        if (counter === repeat) {
            clearInterval(intervalId)
        }
    }, interval);
}
creaeteReapt(console.log, 3, 2000);