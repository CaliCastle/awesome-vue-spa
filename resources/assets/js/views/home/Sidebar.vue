<template>
    <div class="column is-one-quarter">
        <div class="sticky pin-t">
            <transition name="slide-fade">
                <compose-new-thread v-if="App.authenticated"></compose-new-thread>
            </transition>
            <channel-list/>
        </div>
    </div>
</template>

<script>
    import ComposeNewThread from "./ComposeNewThread";
    import ChannelList from "./HotChannels";

    export default {
        components: {ChannelList, ComposeNewThread}
    }
</script>