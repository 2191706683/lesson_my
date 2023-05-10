// 闭包 自由变量
function createRepeat(fn, repeat, interval) {
  let counter = 0;
  const intervalId = setInterval(() => {
    fn('fuzong dog');
    counter++;
    if (counter === repeat) {
      clearInterval(intervalId)
    }
  }, interval)
}
createRepeat(console.log, 3, 2000);