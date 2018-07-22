<template>
    <section class="mb-4 p-2">
        <div class="card rounded-lg shadow-subtle">
            <header class="card-header has-background-primary rounded-t-lg">
                <p class="card-header-title has-text-white">
                    <i class="fas fa-comment-alt"></i>&nbsp;说点什么...
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        还在等什么？赶快来加入微博大家庭吧！
                    </p>
                </div>
            </div>
            <footer class="card-footer border-0 pb-2">
                <a href="#" class="card-footer-item button rounded-full is-success border-0 mx-6 my-3 has-text-weight-bold shadow-subtle">
                    <i class="fas fa-plus-circle"></i>&nbsp;发微博
                </a>
            </footer>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'ComposeNewThread'
    }
</script>