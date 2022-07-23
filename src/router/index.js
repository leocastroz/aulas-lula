
import { createRouter,createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';

function lazyLoad(view){
    return () => import(`../pages/${view}.vue`); 
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/historia',
        name: 'Historia',
        component: lazyLoad('Historia'),
    },
    {
        path: '/carreira',
        name: 'Carreira',
        component: lazyLoad('Carreira'),
    },
    {
        path: '/repositorio',
        name: 'Repositorio',
        component: lazyLoad('Repositorio'),
    },
    {
        path: '/notas',
        name: 'Notas',
        component: lazyLoad('Notas'),
    },
    {
        path: '/comunidade',
        name: 'Comunidade',
        component: lazyLoad('Comunidade'),
    },
    {
        path: '/cv',
        name: 'Cv',
        component: lazyLoad('Cv'),
    },
    {
        path: '/entrar',
        name: 'Entrar',
        component: lazyLoad('Entrar'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;