- 不用vite 如何代码跑起来
    模块化
    vite  webpack  企业级的工程化工具
    中小型工程化工具  不需要那么复杂 立马把项目跑起来

- vue 源码中学到了什么？
    - 模块化
        一个函数/文件只做一件事
        - h.js
        - render.js
            - patchData.js
            - diff.js
    - 抽象能力
    - 逻辑能力
        严谨且完整


- 虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM
    虚拟DOM算法 = 虚拟DOM + Diff算法

- 0 1 2
  2 0 1  递增？
    [
      h('li', { key: 'a' }, 1),
      h('li', { key: 'b' }, 2),
      h('li', { key: 'c' }, 3)
    ]
    [
      h('li', { key: 'a' }, 3),
      h('li', { key: 'b' }, 2),
      h('li', { key: 'c' }, 1)
    ]
    0 1 2 递增

递增 -> 只要不递增 就需要调整位置

