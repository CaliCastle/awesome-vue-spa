<template>
    <modal name="login" transition="pop-out" :width="modalWidth" height="auto">
        <div class="box">
            <div class="partition pb-4 flex flex-col items-center" id="partition-register">
                <logo />
                <div class="partition-title text-2xl has-text-weight-bold has-text-primary">账号登陆</div>
                <div class="partition-form w-full">
                    <form method="POST" @submit.prevent="onSubmitForm">
                        <div class="field">
                            <div class="control has-icons-left">
                                <input id="login-email" class="input" type="email" placeholder="邮箱" v-model="form.email" :class="{ 'text-red-light': form.errors.has('email') }" @keyup.enter.prevent="onSubmitForm" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <p v-if="form.errors.has('email')" class="text-red-light text-sm mt-3">{{ form.errors.get('email') }}</p>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left">
                                <input id="login-password" class="input" type="password" placeholder="密码" v-model="form.password" :class="{ 'text-red-light': form.errors.has('password') }" @keyup.enter.prevent="onSubmitForm" required>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                                <p v-if="form.errors.has('password')" class="text-red-light text-sm mt-3">{{ form.errors.get('password') }}</p>
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
                console.log("Register")
            },
            onSubmitForm() {
                this.form.post('/login')
                    .then(data => {
                        Auth.login(data.token, data.user)
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

<style lang="scss">
    $background_color: #404142;

    .v--modal-overlay {
        background-color: rgba(#000, .5);
    }

    .v--modal {
        border-radius: 12px;
    }

    .box {
        background: white;
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 0 40px black;
        font-size: 0;

        .partition {
            width: 100%;
            height: 100%;
            .partition-title {
                box-sizing: border-box;
                padding: 30px;
                width: 100%;
                text-align: center;
                letter-spacing: 1px;
                font-size: 20px;
                font-weight: 300;
            }
            .partition-form {
                padding: 0 20px;
                box-sizing: border-box;
            }
        }
        input[type=password],
        input[type=email] {
            display: block;
            box-sizing: border-box;
            margin-bottom: 4px;
            width: 100%;
            line-height: 2;
            border: 0;
            border-bottom: 1px solid #DDDEDF;
            padding: 4px 8px;
            font-family: inherit;
            transition: 0.5s all;
            outline: none;
        }
    }

    .pop-out-enter-active,
    .pop-out-leave-active {
        transition: all 0.5s;
    }

    .pop-out-enter,
    .pop-out-leave-active {
        opacity: 0;
        transform: translateY(24px);
    }
</style>