// 路由对象
// 路由类型的设置
// 数组的配置
// 路由的懒加载

import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Introduce.vue' // 页面级别组件 路径 ../ 相对

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',  /* 根路径  login */
            // http 状态码 302 跳转 浏览器
            redirect: '/introduce' // 跳转
        },
        {
            // 动态路由  url  params  ?id=queryString
            path: '/introduce',
            name: 'introduce',
            component: () => import('@/views/Introduce.vue')
        },
        {
            path: '/add',
            name: 'add',
            meta: {
                login: true
            },
            component: () => import('@/views/Add.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue')
        },
    ]
})

export default router