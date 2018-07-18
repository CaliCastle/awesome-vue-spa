/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')
require('./classes/App')

import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import AppView from './views/App.vue'
import Home from './views/Home.vue'

// import Modal from './components/Modal.vue'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

const app = new Vue({
    components: {
        'app': AppView
    },
    router,
}).$mount('#app')