<template>
    <main>
        <hero></hero>
        <section class="section threads-section">
            <router-view></router-view>
        </section>

        <login-modal />
    </main>
</template>

<script>
    import Hero from './app/Hero.vue'
    import LoginModal from '../components/modals/LoginModal.vue'

    export default {
        components: { Hero, LoginModal },
        metaInfo: {
            title: '主页',
            titleTemplate: (titleChunk => {
                return titleChunk ? `${titleChunk} - ${App.name}` : App.name;
            }),
        },
        data() {
            return {}
        }
    }
</script>