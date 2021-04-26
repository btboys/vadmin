import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import setting from './setting';

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
            topNav: true,
            icon: 'h-icon-home',
            key: 'Home',
            title: '财 务'
        }
    },
    {
        path: '/page2',
        name: 'Page2',
        meta: {
            topNav: true,
            icon: 'h-icon-task',
            key: 'Page2',
            title: '报 表'
        }
    },
    ...setting
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

const buildNav = (parentKey) => {
    let navs = routes.filter(val => val.meta && !val.meta.ignore && parentKey === val.meta.parent)
        .map(val => Object.assign({to: {name: val.name}}, val.meta));
    store.commit('updateLeftNav', navs);
    return navs;
}

router.beforeEach((to, from, next) => {
    if (to.meta.topNav) {
        let navs = buildNav(to.meta.key);
        if (navs.length) {
            next(navs[0].to);
            return;
        }
    } else if (to.meta.hasOwnProperty('parent')) {
        buildNav(to.meta.parent);
    }
    next()
});

store.commit('updateTopNav', routes.filter(val => val.meta && !val.meta.ignore && !val.meta.parent)
    .map(val => Object.assign({to: {name: val.name}}, val.meta)));

export default router
