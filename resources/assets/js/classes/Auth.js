import Event from "./Event";

class Auth {
    constructor() {
        this.token = window.localStorage.getItem(this.tokenStorageKey())
        this.user = window.localStorage.getItem(this.userStorageKey())
    }

    /**
     * Setup access token for OAuth.
     */
    checkAuthentication() {
        if (this.token != null) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            return true
        }

        return false
    }

    /**
     * Persist the user data when they're authenticated.
     *
     * @param token
     * @param user
     */
    login(token, user) {
        window.localStorage.setItem(this.tokenStorageKey(), token)
        window.localStorage.setItem(this.userStorageKey(), JSON.stringify(user))

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        this.token = token
        this.user = user

        Event.fire('user-logged-in')
    }

    tokenStorageKey() {
        return 'auth-token'
    }

    userStorageKey() {
        return 'auth-user'
    }
}

export default new Auth()