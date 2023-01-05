# SPA  优质的现代用户体验
1. 不要通过a 标签跳转页面自一下
    click  event.preventDefault()
    index.html#page1 index.html#page2 index.html#page3
    url hash 部分 不会刷新页面
    不同的url来匹配不同的资源
    url 会变
2. url 的hash部分改变 请求新的内容
    并且页面不会重新刷新

3. url 分成以下几部分
    js url 属于  BOM  location对象
    http://127.0.0.1:5500/workspace/lesson_my/js/router/hash/index.html#/page2
    location.protocol   http: -> https:
    location.hostname: "127.0.0.1"
    location.pathname: "/workspace/lesson_my/js/router/hash/index.html"
    location.search
    location.hash: "#/page2"  改变时  不会去刷新
    
