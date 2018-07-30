/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

// 引入Vue
import Vue from 'vue'

// 引入包装库
require('./bootstrap')

// 导入路由文件
import router from './router'
// 导入components
import App    from './views/App'

Vue.component('logo', require('./components/Logo.vue'))

// 生成Vue实例
const app = new Vue({
	router,
	components: {
		App
	},
	data() {
		return {
			app: null
		}
	},
	methods: {},
	created() {

	}
})

app.$mount('#app')