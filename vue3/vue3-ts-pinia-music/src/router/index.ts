import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

// ts 类型检查
// <> 泛型约束 泛指 
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/recommend',
        children:[
            {
                path: '/recommend',
                name: 'recommend',
                component: () => import('@/views/recommend/index.vue')
            }
        ]
           
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
}) 
export default router