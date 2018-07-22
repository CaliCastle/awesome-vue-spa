<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <logo />
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <a class="button is-primary is-inverted is-outlined" @click.prevent="$modal.show('login')">
                            <span class="icon">
                                <i class="fas fa-sign-in-alt"></i>
                            </span>
                            <span>登陆</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    // import Logo from '../../components/Logo.vue'
    //
    export default {
        name: 'navbar',
        // components: { Logo }
    }
</script>