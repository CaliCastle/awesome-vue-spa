<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-head">
            <navbar></navbar>
        </div>
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    碉堡的微博应用
                </h1>
                <h2 class="subtitle">
                    微博单页面app，见过这么cool的吗？
                </h2>
            </div>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <router-link tag="li" to="/">
                            <a class="navbar-item" href="/">看微博</a>
                        </router-link>
                        <router-link tag="li" :to="{ name: 'rank' }">
                            <a class="navbar-item" href="/rank">排行榜</a>
                        </router-link>
                        <li>
                            <a>页面</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    import Navbar from './Navbar.vue'

    export default {
        components: { Navbar }
    }
</script>