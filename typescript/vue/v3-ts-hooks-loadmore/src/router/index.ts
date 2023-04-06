import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import PostDetail from '../views/PostDetail.vue'
import ColumnDetail from '../views/ColumnDetail.vue'
import CreatePost from '../views/CreatePost.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                redirectAlreadyLogin: true
            },
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
            meta: {
                redirectAlreadyLogin: true
            }
        },
        {
            path: '/create',
            name: 'create',
            component: CreatePost,
            meta: {
                requiredLogin: true
            }
        },
        {
            path: '/column/:id',
            name: 'column',
            component: ColumnDetail
        },
        {
            path: '/posts/:id',
            name: 'post',
            component: PostDetail
        }, 
        {
            path: '/*',
            name: 'notFound',
            component: () => import ('../views/NotFound.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const { user, token } = store.state
    const { requiredLogin, redirectAlreadyLogin } = to.meta
    // 未登录
    if (!user.isLogin) {
        if (token) {

        } else {
            // 需要鉴权
            if (requiredLogin) {
                next('login')
            } else {
                next()
            }
        }
    } else {
        // 已登录 
        if (redirectAlreadyLogin) {
            // 排除重复登录
            next('/')
        } else {

        }
    }
})

export default router