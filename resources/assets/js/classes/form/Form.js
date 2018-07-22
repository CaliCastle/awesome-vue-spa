import FormErrors from './FormErrors'

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data
        this.loading = false

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new FormErrors()
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {}

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = ''
        }

        this.errors.clear()
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url) {
        return this.submit('post', url)
    }

    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url) {
        return this.submit('put', url)
    }

    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
    patch(url) {
        return this.submit('patch', url)
    }


    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url) {
        return this.submit('delete', url)
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
    submit(requestType, url) {
        if (this.loading) return

        this.loading = true
        this.errors.clear()

        return new Promise((resolve, reject) => {
            ApiClient.request(requestType, url, this.data())
                .then(({ data }) => {
                    this.onSuccess(data)

                    resolve(data)
                })
                .catch(({ response }) => {
                    this.onFail(response.data)

                    reject(response.data)
                }).then(() => {
                    this.loading = false
            })
        })
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        this.reset()
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} data
     */
    onFail(data) {
        // Record standard validation errors
        if (data.hasOwnProperty('errors')) {
            this.errors.record(data.errors)
            return
        }
        // Record message only validation errors
        if (data.hasOwnProperty('message')) {
            let message = data.message
            // Construct errors object
            let errors = {}
            errors[Object.keys(this.originalData)[0]] = message

            this.errors.record(errors)
        }
    }
}

export default Form