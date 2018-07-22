<template>
    <div class="column">
        <h1 class="title">微博总览</h1>
        <h2 class="subtitle leading-normal">
            一个可以让你发布任何内容的<strong>高大上微博</strong>, 好像很厉害一样，但其实就这么简单
        </h2>
        <section class="py-6">
            <article class="media" v-for="thread in threads">
                <figure class="media-left">
                    <div class="image is-64x64 rounded-lg flex items-center justify-center" :style="{ backgroundColor: '#' + thread.channel.color, color: darkTextColor(thread.channel.color) ? '#111' : '#fff' }">
                        <b class="is-size-3" v-text="thread.user.name.charAt(0)"></b>
                    </div>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ thread.user.name }}</strong> <small>@{{ thread.user.username }}</small>
                            <br>
                            {{ thread.body }}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fas fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div class="media-right">
                    <small><time class="time" :datetime="thread.updated_at"></time></small>
                </div>
            </article>
        </section>
        <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
            <a class="pagination-previous">上一页</a>
            <a class="pagination-next">下一页</a>
            <ul class="pagination-list">
                <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
                <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                threads: [],
                pagination: {
                    current_page: 0,
                    first_page_url: null,
                    last_page: 0,
                    last_page_url: null,
                    next_page_url: null,
                    prev_page_url: null
                }
            }
        },
        methods: {
            darkTextColor(fromColor) {
                return TinyColor(fromColor).isLight()
            }
        },
        created() {
            this.$client.get('/threads').then(({ data }) => {
                const threads = data.threads

                this.threads = threads.data

                setTimeout(() => {
                    // Render timeago
                    TimeAgo.render(document.querySelectorAll('.time'), 'zh_CN')
                }, 50)
            })
        }
    }
</script>