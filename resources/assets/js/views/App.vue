<template>
    <main>
        <hero></hero>
        <section class="section threads-section">
            <router-view></router-view>
        </section>
    </main>
</template>

<script>
    import Hero from './app/Hero.vue'

    export default {
        components: { Hero },
        metaInfo: {
            title: '主页',
            titleTemplate: (titleChunk => {
                return titleChunk ? `${titleChunk} - ${window.App.name}` : window.App.name;
            }),
        },
        data() {
            return {}
        }
    }
</script>