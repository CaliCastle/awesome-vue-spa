class Event {
    constructor() {
        this.vue = new Vue()
    }

    fire(eventName, data = null) {
        this.vue.$emit(eventName, data)
    }

    listen(eventName, callback) {
        this.vue.$on(eventName, callback)
    }
}

export default Event