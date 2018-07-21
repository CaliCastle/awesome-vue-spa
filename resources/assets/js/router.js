import VueRouter from 'vue-router'

const Home = () => import('./views/Home.vue')
const Rank = () => import('./views/Rank.vue')

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/rank',
        name: 'rank',
        component: Rank
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: 'is-active'
})