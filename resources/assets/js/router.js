import VueRouter from 'vue-router'

let routes = [
    {
        path: '/',
        component: require('./views/home')
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
})