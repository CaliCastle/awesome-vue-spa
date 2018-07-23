import Event from "./Event";

class Auth {
    constructor() {
        this.token = window.localStorage.getItem(this.tokenStorageKey())

        let userData = window.localStorage.getItem(this.userStorageKey())
        this.user = userData ? JSON.parse(userData) : null
    }

    /**
     * Setup access token for OAuth.
     */
    checkAuthentication() {
        if (this.token != null) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`

            this.fetchUser()

            return true
        }

        return false
    }

    /**
     * Fetch user info from API.
     */
    fetchUser() {
        ApiClient.get('/me')
            .then(({data}) => {
                this.user = new User(data)
            })
            .catch(error => {})
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

    /**
     * Log the user out.
     */
    logout() {
        ApiClient.post('/logout')
            .then(() => {})

        this.token = null
        this.user = null

        window.localStorage.removeItem(this.tokenStorageKey())
        window.localStorage.removeItem(this.userStorageKey())

        Event.fire('user-logged-out')
    }

    tokenStorageKey() {
        return 'auth-token'
    }

    userStorageKey() {
        return 'auth-user'
    }
}

export default new Auth()