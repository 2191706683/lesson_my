- react 和 vue 的区别
  - 首先，vue好入门，对刚学框架的人比较友好，有template,script,style这种类似三明治的框架，简单且容易理解的指令和事件，都很好用
  - react是一种全面函数式编程
    是JSX 模板语法，编译阶段编译，js 里面写html
  - vue 支持双向/单向绑定，而react 只支持单项绑定
    但双向绑定性能不好，
  - react 没有指令 v-if v-for
      事件模拟原生事件
  - 全面函数式编程 拥抱hooks
    useState
  - ts 支持完美
    React.FC<>
  - VUE 内置css
    react 引入的，css 独立而文件

- 生命周期 useEffect
    - 挂载
        []
    - 更新
        [visible]
    - 卸载
        return () => {
            
        }