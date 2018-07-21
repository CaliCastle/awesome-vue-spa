<template>
    <div class="container">
        <div class="columns">
            <threads></threads>
            <channels></channels>
        </div>
    </div>
</template>

<script>
    import Threads from './home/Threads.vue'
    import Channels from './home/Channels.vue'

    export default {
        components: { Threads, Channels },
        metaInfo: {
            title: '看微博'
        }
    }
</script>