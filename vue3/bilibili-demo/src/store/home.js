import { defineStore } from 'pinia'
// 每个路由级别组件都有独立的store 模块
import { getSwiperList, getVideosList } from '@/service/home.js'

// 每个子仓库都是一个函数，use开头，store结尾，hooks
// 界面工程师 简单写页面
export const useHomeStore = defineStore('home',{
    state: () => {
        return {
            // 响应式
            swiperList: [],
            videosList: []
        }
    },
    actions: {
        // 修改 也在store 里面 数据管理的闭环？
        async getSwiperList() {
            const { result } = await getSwiperList()
            this.swiperList = result
        },
        async getVideosList() {
            const { result } = await getVideosList()
            this.videosList = result
        }
    }
})