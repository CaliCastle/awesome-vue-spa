<template>
    <modal name="login" transition="pop-out" :width="modalWidth" height="auto">
        <div class="box">
            <div class="partition pb-4 flex flex-col items-center" id="partition-register">
                <logo />
                <div class="partition-title text-2xl has-text-weight-bold has-text-primary">账号登陆</div>
                <div class="partition-form w-full">
                    <form method="POST" @submit.prevent="onSubmitForm">
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
                                <span class="icon"><i class="fas fa-sign-in-alt"></i></span>
                                <span>登陆</span>
                            </a>
                            <a class="button is-light flex-1 mx-2 text-sm rounded-full" @click.prevent="registerDidClick">
                                <span class="icon"><i class="fas fa-plus-circle"></i></span>
                                <span>注册</span>
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
        name: 'LoginModal',
        data() {
            return {
                modalWidth: MODAL_WIDTH,
                form: new Form({
                    email: '',
                    password: ''
                })
            }
        },
        methods: {
            registerDidClick() {
                this.$modal.hide('login')
                this.$modal.show('register')
            },
            onSubmitForm() {
                this.form.post('/login')
                    .then(data => {
                        Auth.login(data.token, new Model.User(data.user))

                        this.$modal.hide('login')
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