<template>
    <div class="column is-one-quarter">
        <div class="sticky pin-t">
            <section class="mb-4 p-2">
                <transition name="slide-fade">
                    <div class="card rounded-lg overflow-hidden shadow-subtle" v-if="App.authenticated" key="user">
                        <div class="w-full h-16" style="background: linear-gradient(to right bottom, #8A4D76, #8A4D76);"></div>
                        <div class="columns">
                            <div class="column is-one-third flex justify-center items-center p-0 ml-3 -mt-8">
                                <avatar :username="App.user.username" :initials="App.user.name.charAt(0)" class="border-4 border-white pointer-events-none" size="66"></avatar>
                            </div>
                            <div class="column px-0 pr-3 pt-4">
                                <b class="p-0 mb-2 text-lg">{{ App.user.name }}</b>
                                <small class="block mb-2">@{{ App.user.username }}</small>
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
        methods: {
            loginDidClick() {
                this.$modal.show('login')
            },
            registerDidClick() {
                this.$modal.show('register')
            }
        },
    }
</script>