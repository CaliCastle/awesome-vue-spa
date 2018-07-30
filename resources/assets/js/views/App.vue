<template>
    <main class="flex flex-col justify-between min-h-screen">
        <hero></hero>
        <section class="section threads-section">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </section>
        <app-footer/>

        <login-modal/>
        <register-modal/>
        <compose-thread-modal/>
    </main>
</template>

<script>
    import Hero from './app/Hero.vue'
    import LoginModal from '../components/modals/LoginModal.vue'
    import AppFooter from "./AppFooter";
    import ComposeThreadModal from "../components/modals/ComposeThreadModal";
    import RegisterModal from "../components/modals/RegisterModal";

    export default {
        components: {AppFooter, Hero, LoginModal, RegisterModal, ComposeThreadModal},
		props: {
			app: {
				type: Object,
				default: null
			},
		},
		metaInfo() {
			return {
				title: '主页',
				titleTemplate: (titleChunk => {
					// 设置后台管理页面标题格式
					return `${titleChunk} - ${this.app.name}`
				}),
			}
		},
		created() {
			// 创建api客户端
			this.$root.makeClient(this.app.apiBaseUrl)

			// 绑定app到$root
			this.$root.app = this.app
		}
    }
</script>