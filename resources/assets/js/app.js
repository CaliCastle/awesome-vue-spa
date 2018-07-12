/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import App from './views/App.vue'
import Hello from './views/Hello.vue'
import Home from './views/Home.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        }
    ]
})

// Change page title.
// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     next()
// })

const app = new Vue({
    components: { App },
    router,
}).$mount('#app')