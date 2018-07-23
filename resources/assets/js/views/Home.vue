<template>
    <div class="container">
        <div class="columns">
            <profile-bar/>
            <threads/>
            <sidebar/>
        </div>
    </div>
</template>

<script>
    import Threads from './home/Threads'
    import Sidebar from './home/Sidebar'
    import ProfileBar from "./home/ProfileBar";

    export default {
        components: {ProfileBar, Threads, Sidebar },
        metaInfo: {
            title: '看微博'
        }
    }
</script>