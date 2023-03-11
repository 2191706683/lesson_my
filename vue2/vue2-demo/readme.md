# vue 2.0 语法

- 公司用react， 但是我们只会vue 怎么回答
    1. vue 和 react 都是当下最好的MVVM开发框架
    2. vue 3.0 composition api + hooks 函数编程
        两个越来越像
    3. 当时选择vue作为主要开发框架，相信自己
        如果做react 也可以很快熟悉
- vue 2.0 和 3.0 有何区别
    1. 面向对象编程和函数编程
        composition api + setup  语法糖
        代码风格不用为了面向对象而面向对象 this 基本不用
        composition api 很好用
    2. hooks 编程 useRouter useStore
    3. 老版本项目切换回去也很快， 主打学习vue 3.0

- 在工程化的思维下， 开发vue 项目的本质是？
    1. .vue 的组件为主
        template script style 三明治
    2. 使用相应的loader 将代码编译为浏览器可执行的js css 文件
        - vue loader 处理.vue 文件
        - style css-loader style-loader stylus-loader
        - script + template
            vue-loader mvvm {{}} state
                - vue 3.0 setup API
                - vue 2.0 类式编程
            js  babel-loader