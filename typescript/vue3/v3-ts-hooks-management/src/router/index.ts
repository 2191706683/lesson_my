import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';
import { usePermissStore } from '../store/permiss';
// RouteRecordRaw
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格',
                    permiss: '2'
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/table.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 权限如何做？ 后台细致的权限 登录 | 角色
router.beforeEach((to, from, next) => {
    // 页面标题
    document.title = `${to.meta.title || 'bilibili后台管理系统'}`
    const role = localStorage.getItem('ms_username') // admin 管理员 user 普通用户
    const permiss = usePermissStore() // 权限
    // console.log(permiss)
    if (!role && to.path !== '/login') {
        next('/login')
        // next()
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        next('/403')  
    } else {
        next();
    }
     
})

export default router