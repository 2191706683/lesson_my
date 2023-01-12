// 路由的配置页面
import {
    createRouter,  //创建路由
    createWebHistory // history api
    // createWebHashHistory // 路由的形式 hash
} from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Posts from '../pages/Posts.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
