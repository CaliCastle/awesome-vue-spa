<template>
    <div class="column is-one-quarter">
        <div class="sticky pin-t">
            <trending-topics/>
        </div>
    </div>
</template>

<script>
    import TrendingTopics from "./TrendingTopics";

    export default {
        components: {TrendingTopics}
    }
</script>