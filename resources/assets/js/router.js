import VueRouter from 'vue-router'

const Home = () => import('./views/Home.vue')
const Rank = () => import('./views/Rank.vue')
const NotFound = () => import('./views/errors/404.vue')

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/rank',
        name: 'rank',
        component: Rank
    },
    {
        path: '*',
        component: NotFound
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: 'is-active'
})