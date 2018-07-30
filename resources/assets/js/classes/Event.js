import Vue from 'vue'

const event_types = Object.freeze({
	UserLoggedIn: 'user-logged-in',
	UserLoggedOut: 'user-logged-out',
})

class Event {

	// Properties
	vue: Vue
	types: Object

	constructor() {
		this.vue = new Vue()
		this.types = event_types
	}

	fire(eventName, data = null) {
		this.vue.$emit(eventName, data)
	}

	listen(eventName, callback) {
		this.vue.$on(eventName, callback)
	}
}

export default Event