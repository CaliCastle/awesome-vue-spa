window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
}

/**
 * Bootstrap Api Client
 */
import { ApiClient } from './classes/http/ApiClient'

let baseApiUrl = document.querySelector('meta[name="base-api-url"]').content

window.ApiClient = new ApiClient(baseApiUrl)
// Bind to Vue instances
Vue.prototype.$client = window.ApiClient

import Vue from 'vue'
import Event from './classes/Event'
import Form from './classes/form/Form'
import Auth from './classes/Auth'
import User from './classes/User'

window.Vue = Vue
window.Event = Event
window.Form = Form
window.Auth = Auth
window.User = User

/**
 * Global access for store, `single source of truth`.
 *
 * @type {CombinedVueInstance<V extends Vue, Object, Object, Object, Record<never, any>>}
 */
window.App = new Vue({
    data: {
        user: Auth.user,
        authenticated: Auth.checkAuthentication()
    },
    created() {
        this.name = document.querySelector('meta[name="app-name"]').content

        Event.listen('user-logged-in', () => {
            this.authenticated = true
            this.user = Auth.user
        })

        Event.listen('user-logged-out', () => {
            this.authenticated = false
            this.user = null
        })
    },
})

/**
 * Assign to global Vue.
 *
 * @type {CombinedVueInstance<V, extends, Vue, Object, Object, Object, Record<never, any>>}
 */
Vue.prototype.App = App

/**
 * Use Vue-Modal.
 */
import VModal from 'vue-js-modal'
Vue.use(VModal)

/**
 * Bootstrap TimeAgo plugin.
 */
import timeago from 'timeago.js'

window.TimeAgo = timeago()

/**
 * Bootstrap TinyColor plugin.
 */
import tinycolor from 'tinycolor2'

window.TinyColor = tinycolor