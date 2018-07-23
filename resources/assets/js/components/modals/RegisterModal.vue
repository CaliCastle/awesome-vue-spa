<template>
    <modal name="register" transition="pop-out" :width="modalWidth" height="auto">
        <div class="box">
            <div class="partition pb-4 flex flex-col items-center" id="partition-register">
                <logo />
                <div class="partition-title text-2xl has-text-weight-bold has-text-primary">账号注册</div>
                <div class="partition-form w-full">
                    <form method="POST" @submit.prevent="onSubmitForm">
                        <div class="field">
                            <div class="control has-icons-left has-icons-right">
                                <input id="login-name" class="input" type="text" placeholder="昵称" v-model="form.name" :class="{ 'is-danger': form.errors.has('name') }" @keyup.enter.prevent="onSubmitForm" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user-circle"></i>
                                </span>
                                <span class="icon is-small is-right" v-if="form.errors.has('name')">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <p v-if="form.errors.has('name')" class="help is-danger text-sm mt-3">{{ form.errors.get('name') }}</p>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left has-icons-right">
                                <input id="login-username" class="input" type="text" placeholder="用户名" v-model="form.username" :class="{ 'is-danger': form.errors.has('username') }" @keyup.enter.prevent="onSubmitForm" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-at"></i>
                                </span>
                                <span class="icon is-small is-right" v-if="form.errors.has('username')">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <p v-if="form.errors.has('username')" class="help is-danger text-sm mt-3">{{ form.errors.get('username') }}</p>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left has-icons-right">
                                <input id="login-email" class="input" type="email" placeholder="邮箱" v-model="form.email" :class="{ 'is-danger': form.errors.has('email') }" @keyup.enter.prevent="onSubmitForm" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right" v-if="form.errors.has('email')">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <p v-if="form.errors.has('email')" class="help is-danger text-sm mt-3">{{ form.errors.get('email') }}</p>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left has-icons-right">
                                <input id="login-password" class="input" type="password" placeholder="密码" v-model="form.password" :class="{ 'text-red-light': form.errors.has('password') }" @keyup.enter.prevent="onSubmitForm" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                                <span class="icon is-small is-right" v-if="form.errors.has('password')">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </span>
                                <p v-if="form.errors.has('password')" class="help is-danger text-sm mt-3">{{ form.errors.get('password') }}</p>
                            </div>
                        </div>

                        <div class="button-set flex my-5 -mx-2">
                            <a class="button is-primary flex-1 mx-2 text-sm rounded-full" @click.prevent="onSubmitForm" :class="{ 'is-loading' : form.loading }">
                                <span class="icon"><i class="fas fa-plus-circle"></i></span>
                                <span>注册</span>
                            </a>
                            <a class="button is-light flex-1 mx-2 text-sm rounded-full" @click.prevent="loginDidClick">
                                <span class="icon"><i class="fas fa-sign-in-alt"></i></span>
                                <span>登陆</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
    const MODAL_WIDTH = 420
    export default {
        name: 'RegisterModal',
        data() {
            return {
                modalWidth: MODAL_WIDTH,
                form: new Form({
                    name: '',
                    username: '',
                    email: '',
                    password: ''
                })
            }
        },
        methods: {
            loginDidClick() {
                this.$modal.hide('register')
                this.$modal.show('login')
            },
            onSubmitForm() {
                this.form.post('/register')
                    .then(data => {
                        Auth.login(data.token, new User(data.user))

                        this.$modal.hide('register')
                    })
                    .catch(error => {})
            }
        },
        created() {
            this.modalWidth = window.innerWidth < MODAL_WIDTH
                ? MODAL_WIDTH / 2
                : MODAL_WIDTH
        }
    }
</script>