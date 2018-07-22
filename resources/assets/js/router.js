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

// New up router.
const router = new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: 'is-active'
})

// Setup middleware for route protections.
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (! Auth.checkAuthentication()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });

            return
        }
    }

    next()
})

export default router