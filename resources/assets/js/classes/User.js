class User {
    constructor(attributes = null) {
        if (attributes == null) return

        // Map attributes from object
        const attr = User.attributes(),
            keys = Object.keys(attributes)

        for (let index in keys) {
            if (attributes.hasOwnProperty(keys[index])) this[keys[index]] = attributes[keys[index]]
        }
    }

    static attributes() {
        return ['id', 'username', 'name', 'email']
    }

    static authenticate() {

    }
}

export default User