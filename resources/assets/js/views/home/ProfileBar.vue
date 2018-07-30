<template>
    <div class="column is-one-quarter">
        <div class="sticky pin-t">
            <section class="mb-4 p-2">
                <transition name="slide-fade">
                    <div class="card rounded-lg overflow-hidden shadow-subtle" v-if="$app.authenticated" key="user">
                        <div class="w-full h-16" style="background: linear-gradient(to right bottom, #8A4D76, #8A4D76);"></div>
                        <div class="columns">
                            <div class="column is-one-third flex justify-center items-center h-full p-0 ml-3 -mt-4">
                                <avatar :username="$app.user.username" :initials="$app.user.name.charAt(0)" class="border-4 border-white pointer-events-none" :size="72"></avatar>
                            </div>
                            <div class="column px-0 pr-3 pt-4 pb-0">
                                <b class="p-0 mb-2 text-lg">{{ $app.user.name }}</b>
                                <small class="block mb-2">@{{ $app.user.username }}</small>
                            </div>
                        </div>
                        <div class="columns pb-4 mx-2">
                            <div class="column">
                                <a href="#" class="text-center">
                                    <p class="font-bold text-sm"><b>微博</b></p>
                                    <span class="block font-bold text-xl">{{ profile.threadsCount }}</span>
                                </a>
                            </div>
                            <div class="column">
                                <a href="#" class="text-center">
                                    <p class="font-bold text-sm"><b>关注中</b></p>
                                    <span class="block font-bold text-xl">{{ profile.following }}</span>
                                </a>
                            </div>
                            <div class="column">
                                <a href="#" class="text-center">
                                    <p class="font-bold text-sm"><b>粉丝</b></p>
                                    <span class="block font-bold text-xl">{{ profile.followers }}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="card rounded-lg shadow-subtle" key="guest" v-else>
                        <header class="card-header has-background-success rounded-t-lg">
                            <p class="card-header-title has-text-white">
                                <i class="fas fa-user"></i>&nbsp;还木有登陆？
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <p>
                                    最近发生了什么新鲜事？赶快来跟大家分享一下吧！
                                </p>
                            </div>
                        </div>
                        <footer class="card-footer border-0 pb-2">
                            <a href="#" class="card-footer-item button rounded is-success border-0 ml-4 mr-2 my-3 has-text-weight-bold text-sm shadow-subtle" @click.prevent="loginDidClick">
                                <i class="fas fa-sign-in-alt"></i>&nbsp;登陆
                            </a>
                            <a href="#" class="card-footer-item button rounded border-0 ml-2 mr-4 my-3 has-text-weight-bold text-sm shadow-subtle" @click.prevent="registerDidClick">
                                <i class="fas fa-plus-circle"></i>&nbsp;注册
                            </a>
                        </footer>
                    </div>
                </transition>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'profile-bar',
        data() {
            return {
                profile: {}
            }
        },
        methods: {
            loginDidClick() {
                this.$modal.show('login')
            },
            registerDidClick() {
                this.$modal.show('register')
            },
            fetchUserInfo() {
                Client.get('/me/profile')
                    .then(({data}) => {
                        this.profile = data
                    })
                    .catch(error => {})
            }
        },
        created() {
            if (this.$app.authenticated)
                this.fetchUserInfo()

            Event.listen('user-logged-in', () => {
                this.fetchUserInfo()
            })
        }
    }
</script>