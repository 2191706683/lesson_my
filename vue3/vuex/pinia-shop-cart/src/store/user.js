import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: '赖总米哈游',
        isAdmin: true
    })
})