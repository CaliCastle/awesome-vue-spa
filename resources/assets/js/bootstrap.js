window._ = require('lodash')
window.axios = require('axios')

import Vue from 'vue'
import Event from './classes/Event'
import Form from './classes/form/Form'
import User from './classes/User'

window.Vue = Vue
window.Event = new Event()
window.Form = new Form()

window.App = {
    name: document.querySelector('meta[name="app-name"]').content,
    user: new User()
}