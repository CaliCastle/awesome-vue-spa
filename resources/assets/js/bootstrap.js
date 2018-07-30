// window._ = require('lodash')

window.axios = require('axios')
window.axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest'
}
window.TimeAgo = require('timeago.js')
window.TinyColor = require('tinycolor2')

/**
 * 引入工具类
 */
// import Vue from 'vue'
import { Client }       from './classes/http/Client'
import { LocalStorage } from './classes/storage/LocalStorage'
import Event            from './classes/Event'
import Form             from './classes/form/Form'
import Auth             from './classes/Auth'

/**
 * 绑定工具全局访问
 */
window.Client = Client
window.Local = new LocalStorage()
window.Event = new Event()
window.Form = Form
window.Auth = new Auth()

/**
 * Bind model classes
 */
import User   from "./classes/models/User";

window.Model = {
	User
}

/**
 * Vue设置
 */
import Vue    from 'vue'

/**
 * 创建执行api请求的客户端
 *
 * @param baseUrl
 */
Vue.prototype.makeClient = (baseUrl: string) => {
	// 绑定api客户端实例
	this.$client = new Client(baseUrl)
	// 全局访问
	window.Client = this.$client
}

Vue.prototype.$event = window.Event

/**
 * 创建唯一app
 */
window.$app = new Vue({
	data: {
		user: window.Auth.user,
		authenticated: window.Auth.checkAuthentication()
	},
	methods: {
		toggleUserState(loggedIn: boolean) {
			this.authenticated = loggedIn
			this.user = loggedIn ? window.Auth.user : null
		}
	},
	created() {
		this.$event.listen(this.$event.types.UserLoggedIn, () => {
			this.toggleUserState(true)
		})

		this.$event.listen(this.$event.types.UserLoggedOut, () => {
			this.toggleUserState(false)
		})
	},
})
Vue.prototype.$app = window.$app

/**
 * 使用Vue路由器
 */
import Router from 'vue-router'

Vue.use(Router)

/**
 * 使用Vue-Meta
 */
import Meta   from 'vue-meta'

Vue.use(Meta)

/**
 * 使用Vue弹出框
 */
import VModal from 'vue-js-modal'

Vue.use(VModal)

/**
 * Use Vue-Avatar
 */
import Avatar from 'vue-avatar'

Vue.component('avatar', Avatar)