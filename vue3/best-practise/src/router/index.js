import Home from '../pages/Home.vue' //页面级别组件
// 当页面路由很多时，升级以下配置文案
// 首页加载时，没有必要去引入并执行所有的页面
// 当前会，性能慢
// 路由的懒加载
import {
    createWebHashHistory, // 前端路由的形式
    // createWebHistory,
    createRouter  // spa  路由实例  前端路由对象
} from 'vue-router'
const routes = [
    // 扩展性很好，
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue')
    },
    {
        path: '/other',
        name: 'Other',
        component: () => import('../pages/Other.vue')
    }
]

const router = createRouter({
    // 配置前端路由
    history: createWebHashHistory(),
    routes
})

export default router
