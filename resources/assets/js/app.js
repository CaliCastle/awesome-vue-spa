/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import Router from 'vue-router'
import Meta from 'vue-meta'
import router from './router'
import App from './views/App.vue'
import Avatar from 'vue-avatar'

Vue.use(Router)
Vue.use(Meta)

Vue.component('avatar', Avatar)
Vue.component('logo', require('./components/Logo.vue'))

const app = new Vue({
    components: { App },
    router,
}).$mount('#app')