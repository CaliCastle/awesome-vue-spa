window._ = require('lodash')
window.axios = require('axios')

import Vue from 'vue'
import Event from './classes/Event'
import Form from './classes/form/Form'

window.Vue = Vue
window.Event = new Event()
window.Form = new Form()