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
        metaInfo: {
            title: '主页',
            titleTemplate: (titleChunk => {
                return titleChunk ? `${titleChunk} - ${App.name}` : App.name;
            }),
        },
        data() {
            return {}
        }
    }
</script>