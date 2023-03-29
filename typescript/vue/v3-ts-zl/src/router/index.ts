import { createRouter,  createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

// 类型的推导
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/create',
            name: 'create',
            meta: {
                requiredLogin: true
            },  
            component: () => import('../views/CreatePost.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const { user, token } = store.state
    const { requiredLogin } = to.meta
    if (!user.isLogin)  {
        if (token) {

        } else {
            if (requiredLogin) {
                next('login')
            } else {
                next()
            }
        }
    }
})

export default router