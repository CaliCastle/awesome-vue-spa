<template>
    <modal name="login" transition="pop-out" :width="modalWidth" height="auto">
        <div class="box">
            <div class="partition pb-4" id="partition-register">
                <div class="partition-title text-2xl">账号登陆</div>
                <div class="partition-form">
                    <form autocomplete="false">
                        <input id="login-email" type="text" placeholder="邮箱">
                        <input id="login-password" type="password" placeholder="密码">
                    </form>

                    <div class="button-set flex my-5 -mx-2">
                        <button class="button is-primary flex-1 mx-2 text-sm">登陆</button>
                        <button class="button is-light flex-1 mx-2 text-sm">注册</button>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
    const MODAL_WIDTH = 420
    export default {
        name: 'LoginModal',
        data () {
            return {
                modalWidth: MODAL_WIDTH
            }
        },
        created () {
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
        color: #8b8c8d;
        font-size: 0;

        .box-messages {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
        }
        .box-error-message {
            position: relative;
            overflow: hidden;
            box-sizing: border-box;
            height: 0;
            line-height: 32px;
            padding: 0 12px;
            text-align: center;
            width: 100%;
            font-size: 11px;
            color: white;
            background: #F38181;
        }
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
        input[type=text] {
            display: block;
            box-sizing: border-box;
            margin-bottom: 4px;
            width: 100%;
            font-size: 12px;
            line-height: 2;
            border: 0;
            border-bottom: 1px solid #DDDEDF;
            padding: 4px 8px;
            font-family: inherit;
            transition: 0.5s all;
            outline: none;
        }
        /*button {*/
            /*background: white;*/
            /*border-radius: 4px;*/
            /*box-sizing: border-box;*/
            /*padding: 10px;*/
            /*letter-spacing: 1px;*/
            /*font-weight: 400;*/
            /*min-width: 140px;*/
            /*margin-top: 8px;*/
            /*color: #8b8c8d;*/
            /*cursor: pointer;*/
            /*border: 1px solid #DDDEDF;*/
            /*text-transform: uppercase;*/
            /*transition: 0.1s all;*/
            /*font-size: 10px;*/
            /*outline: none;*/
            /*&:hover {*/
                /*border-color: mix(#DDDEDF, black, 90%);*/
                /*color: mix(#8b8c8d, black, 80%);*/
            /*}*/
        /*}*/
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