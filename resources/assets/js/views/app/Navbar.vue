<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/" exact-active-class="">
                    <logo />
                </router-link>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                    <transition name="slide-right-fade" mode="out-in">
                        <div class="navbar-item" v-if="$app.authenticated" key="user">
                            <div class="dropdown" :class="{ 'is-active': dropdownOpen }">
                                <div class="dropdown-trigger">
                                    <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu" @click.prevent="toggleDropdown">
                                        <span class="icon">
                                            <i class="fas fa-user"></i>
                                        </span>
                                        <span>{{ $app.user.name }}</span>
                                        <span class="icon is-small">
                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item">
                                            修改资料
                                        </a>
                                        <hr class="dropdown-divider">
                                        <a class="dropdown-item has-text-danger" @click.prevent="logoutDidClick">
                                            <i class="fas fa-power-off"></i>
                                            <b>注销</b>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="navbar-item" key="guest" v-else>
                            <a class="button is-primary is-inverted is-outlined" @click.prevent="$modal.show('login')">
                                <span class="icon">
                                    <i class="fas fa-sign-in-alt"></i>
                                </span>
                                <span>登陆</span>
                            </a>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                dropdownOpen: false
            }
        },
        methods: {
            onDropdownClick() {
                this.dropdownOpen = false
            },
            logoutDidClick() {
                this.onDropdownClick()
                // Auth.logout()
            },
            toggleDropdown() {
                this.dropdownOpen = !this.dropdownOpen
            }
        },
    }
</script>