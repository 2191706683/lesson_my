// const { reactive, effect } = require("@vue/reactivity") 
// const { reactive } = require('../reactive')
// const { effect } = require('../effect')
import { reactive } from '../reactive'
import { effect } from '../effect'
// describe是由jest 提供的API
// vue是一个达成了99.99% 用例测试的框架
describe('虚拟DOM', () => {
    it('测试', () => {
        expect(1 + 2).toBe(3)
    })
    // expect toBe 断言
    it('reactive 基本使用', () => {
        // expect(1 + 2).toBe(3)
        let obj = {num: 0}
        const ret = reactive(obj)
        const ret2 = reactive(obj)
        let val
        effect(() => {
            val = ret.num // 运行 依赖收集
        })
        expect(val).toBe(0)
    })
})