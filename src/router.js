import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppMain from './pages/AppMain.vue';
import AppSingleProject from './pages/AppSingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppMain
        },

        {
            path: '/projects/:id',
            name: 'singleProject',
            component: AppSingleProject
        }
    ]
});
export { router };