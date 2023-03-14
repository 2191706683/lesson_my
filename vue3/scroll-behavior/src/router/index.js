import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/list',
        name: 'list',
        meta: {
            keepAlive: true
        },
        component: () => import('../views/List.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router