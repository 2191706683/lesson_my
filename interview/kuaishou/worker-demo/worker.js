// worker 不能操作 DOM API
// 页面发消息
self.addEventListener('message', (e) => {
  const message = e.data;
  const result = message + 'world!';
  self.postMessage(result);
})