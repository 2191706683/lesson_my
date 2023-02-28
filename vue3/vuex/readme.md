- 组件 路由 数据管理
    跨层级 跨页面共享状态 比如login
    前端工作 分成两种
    组件开发（ 切页面 由实习生来开发）
    数据管理 （当项目越来越大的时候）从组件本地（没什么状态 computed）抽离到中央 (leader)


- 项目架构store
- vuex 共享状态来到组件的流程
    1. vuex 提供的useStore hooks api 拿到store
    2. store.state.count state 是状态对象 读操作
    3. 把读操作作为computed的计算属性的返回值，成为当前的状态
        在计算的过程中依赖于store.state.count  这里进行了一个订阅了count

    4. 全局的$store 对象

- vue 数据流转过程
    1. 本地组件数据状态 data()  reactive/ref 将被收到中央 方便共享和管理
    2. 使用useStore + 使用computed 计算属性   让状态从中央来到地方
    3. 本地不可以直接修改state，想要修改，可以利用store.commit('add')
        提交一个mutation 名字一定要在mutations 里
        vuex可以帮助我们管理好数据

- vuex 的原则
    - vuex 是一种复杂的设计范式 管理中大型项目的状态（共享状态）
    - 小项目最好不要用vuex，直接组件自己管理状态 使用props + emit localStorage ... 共享
    - 组件基本不在自己管理状态
        actions 都在vuex 提供了
        data() reactive ref 很少在组件里用了
    - store 全局管理状态
        store是全家桶之一，来自vuex/pinia 
        vuex 是现在  pinia 是未来
        - createStore()  单一状态树 在vuex中只能有一个仓库，
            在同一个仓库找状态，数据就唯一，状态（共享）唯一
        - 在仓库里可以分成多个模块 modules
            每个module 都有独立的 state mutations actions
        - state 只读状态  对象
        - mutations 只有它可以修改state 调用commit('')
        - actions  数据的请求不再发生在组件内部，而是发生在actions中
            通过dispatch 来触发action

    - vuex 数据流转流程
        - root(Store) -> modules(cart | products) -> state(声明) 状态的查找 读操作
        - 数据（服务器端）-> api(接口模块 products) -> actions(管理接口请求 dispatch) ->
            mutation(commit 唯一修改数据 actions里调用) -> state(写操作)







