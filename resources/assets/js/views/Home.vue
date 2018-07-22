<template>
    <div class="container">
        <div class="columns">
            <threads></threads>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script>
    import Threads from './home/Threads.vue'
    import Sidebar from './home/Sidebar.vue'

    export default {
        components: { Threads, Sidebar },
        metaInfo: {
            title: '看微博'
        }
    }
</script>