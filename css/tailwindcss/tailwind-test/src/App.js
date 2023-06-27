import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Todos from './Todos';

// App 组件就是函数
function App() {
  // 组件函数返回值是一段JSX 
  // JSX JS in XML 语法糖
  // AST 虚拟 DOM 
  // 类名用的className class 
  // 函数式编程
  // const [count, setCount] = useState(1)
  // // const count = ref(1)
  // // count.value = 2
  // setTimeout(() => {
  //   setCount(2)
  // }, 1000)
  return (
    <Todos />
    // <div className='box'>
    //   Hello World!
    // </div>
    // css 出问题的地方在哪？命名
    // 不需要命名
    // 不需要考虑冲突
    // css 很少需要写了
    // 不需要考虑兼容性
    // <div className="text-[14px] hover:text-[30px]  bg-red-500 md:bg-blue-500 p-1 border border-black border-solid">
    //   Hello World! {count}

    // </div>
  );
}

export default App;
