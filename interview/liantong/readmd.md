# 中国联通
- 脸皮厚
    早期面试，心里障碍  面试官当一般朋友，平等交流，
    前3场 玩票型
- 面试准备
    1. 无准备面试
        暴露出来，针对型复习
        录音
    2. 结束面试后，马上记题目 复盘
    3. 继续投继续面
    多平台  多投递

- 项目的亮点和难点？ 90% + 
    准备
    - 技术栈  普通  思想和讲话在并行
        1. 全家桶vue-router启动了组件懒加载，鉴权，路由守卫， 实现了jwt的登录全流程  <!-- 自己的项目 --> <!-- typescript/vue3/vue3-ts-hooks-management/router.js -->
        2. 使用了pinaia / vuex 数据流管理，将应用开发分成数据管理和界面开发两部分
        3. 组件化思维，按页面组件、通用组件、父子组件 来模块化开发
            使用了vant 组件库
        4. 全面使用composition api + hooks 函数式编程，自定义了
            useLocation useRequest
        5. 结合路由首位和transition 组件 实现了页面切换动画
        6. 使用loadsh 在搜索界面搜索节流，之后升级为useDebounce hooks 实现
        7. 基于弹性布局，每列的高度计算，将我们的数据绑定算好，完成瀑布流效果开发
        8. betterscroll 实现丝滑的滚动   <!-- vue3/cainiao -->
        9. axios 拦截器，请求拦截添加token 到header authorization
            响应拦截解出data，和做错误处理
        10. mockjs 请求模拟  使用了较复杂的Mock.Random()
            随机生成图片，标题 <!-- vue3/waterfall -->
        11. 使用了flexible 移动端 rem 适配

        难点：
        介绍在项目实现中遇到的技术难点和如何应对
        瀑布流
        - 数据绑定
        - 高度计算
            mockjs 高度和图片
        - stylus mixin混合的使用
            1px
            wh
        jwt 登录 jsonwebtoken
        pinia 模块化  状态设计
        ts 功能
        node

- 好多人名 第一个人名不加， 后面的都加
    css 选择器
- v-if v-show
    v-if 不会在dom中  v-if component  触发生命周期函数
    v-show display:none  不会触发unmount  只会触发计算属性 watch
    v-if和v-show是Vue.js框架中常用的两个指令，用于控制元素的显示和隐藏。它们的区别如下：

    v-if指令
    v-if指令在渲染时是否出现在DOM中是根据表达式的真假值来决定的。如果表达式的值为真，则该指令所在的元素会渲染到DOM中，否则该元素将不被渲染。
    使用v-if指令的优点是，减少了不必要的DOM操作。当表达式的值为假时，该元素不会被渲染到DOM中，可以减少页面的加载时间和内存占用。
    缺点是，在页面中频繁地切换v-if指令所在元素的显示状态时，可能会导致Vue.js重复创建和销毁组件实例，造成不必要的性能损失。

    v-show指令
    v-show指令也用于控制元素的显示和隐藏，但是它不同于v-if。无论表达式的值是真还是假，该指令所在的元素都会被渲染到DOM中，只是通过设置元素的display属性来控制元素的隐藏和显示。
    使用v-show指令的优点是，不会重复创建和销毁组件实例，性能相对于v-if指令更好，而且在频繁切换元素的显示状态时，也不会影响到DOM的渲染。
    缺点是，由于元素始终存在于DOM中，无论表达式的真假，因此可能会占用一定的内存空间。

- 鉴权 
    理清思路 条理清晰 请教面试官
    1. 在路由配置数组中， 使用meta对象配置是否需要登录，还有角色
        - 登录  isLogin boolean  没有登录，去到这个页面，redirect 到 login
        - 角色 role 数值型1/2? 未来 根据用户角色拥有的权限数组是否包含该值，看是否要forbidden 403
    2. 配置路由守卫
        每次路由的切换，都会执行beforeEach 钩子函数,
        三个参数 to from next
        如果不需要鉴权 next 放行
        to 也就是 路由对象，表示要去到的地址读取meta 里的isLogin 或 role属性 做相应判断，
        需要登录，没登录就304redirect 到 login
        当前role如果没有to的访问权限
    3. axios 请求拦截 判断当前localStorage中是否有token
        有就在头部之中带上Authorization字段 值为token
    4. 后端鉴权
        分cookie/session 通过cookie 拿到session，session中间件帮我们做
        ctx.session 上下文
        jwt 解析前端请求中的Authoration 头，交给jwt decode 拿到currentUser 对象
        在任何需要前端的路由控制器中间件前加上鉴权中间件
        如果没有，返回403
        如果有，返回json数据
        router.post('/posts', auth, postsController.add)
