<template>
    <div class="column is-one-quarter">
        <section class="section">
            <compose-new-thread></compose-new-thread>
        </section>
        <section class="section">
            <nav class="panel">
                <p class="panel-heading panel-heading has-text-white has-background-primary">
                    <i class="fas fa-fire"></i>&nbsp;热门频道
                </p>
                <a class="panel-block is-active">
                    全部频道
                </a>
                <a class="panel-block">
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                    频道
                </a>
            </nav>
        </section>
    </div>
</template>

<script>
    import ComposeNewThread from "./ComposeNewThread";
    export default {
        components: {ComposeNewThread}
    }
</script>