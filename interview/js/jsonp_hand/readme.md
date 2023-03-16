# 手写json
- 跨域
    后端的处理
    1. Access-Control-Allow-Origin
        cors ajax 同源策略
        res.setHeader('Access-Control-Allow-Origin', '*')
    2. 不受同源机制限制的 script 标签
        <script src="外网地址"></script>
        img link 
        链接外界的静态资源的
        
- CORS Policy
    cross origin resource share 跨域资源共享
    - 为了安全性
        企业内部，baidu.com  api.baidu.com  zhidao.baidu.com
        前后端 分离 3000 8888  跨域是家常便饭
        cors 方案 适用于 比较保守的跨域解决方案，
        公司内部或友商
        cors  抽象的中间件叫cors
        
- script 门户开放型 
  开放给全网用的 github api douban api      
  origin  起始是在哪？ 用户的浏览器端 绕过同源策略
  1. script 可以请求跨域资源 不受同源策略的影响，
        前提是返回js
  2. 提前埋好callback 回调函数
        返回的js 会执行

    json 资源 外面包一个函数，成为 js 函数调用
