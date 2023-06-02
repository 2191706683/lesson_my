import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '../pages/TopPage.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory({}),
    routes: [
        {
            path: '/',
            name: 'topNews',
            component: TopPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router;