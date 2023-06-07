import React from "react";
import { MyComponent } from './demo'
import { MyAjax } from "./ajax";
// jsx -> tsx 在js 里写html的语法糖
// UI 组件 react JSX 入门难，描述性极强
// react 函数式编程思想 react 组件表现得更函数
export const App = () => {
  // 响应式
  // 逻辑
  // 生命周期
  // 事件监听
  // return <h1>Hello React!</h1>
  return (
    <>
      <h1>Hello, React</h1>
      <MyComponent />
      <MyAjax />
    </>
  )
}
export default App;