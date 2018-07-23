<template>
    <section class="mb-4 p-2">
        <nav class="panel overflow-hidden rounded-lg has-background-white shadow-subtle">
            <p class="panel-heading panel-heading has-text-weight-bold has-text-white has-background-primary text-base py-4 rounded-t-lg">
                <i class="fas fa-fire"></i>&nbsp;热门频道
            </p>
            <a class="panel-block is-active border-0 border-b-2 border-l-4">
                全部频道
            </a>
            <a class="panel-block border-0">
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                频道
            </a>
        </nav>
    </section>
</template>

<script>
    export default {
        name: 'hot-channels'
    }
</script>