class User {
    constructor(attributes = null) {
        if (attributes == null) return

        // Map attributes from object
        const attr = User.attributes()

        for (let index in attr) {
            if (attributes.hasOwnProperty(attr[index])) this[attr[index]] = attributes[attr[index]]
        }
    }

    static attributes() {
        return ['id', 'username', 'name', 'email']
    }

    static authenticate() {

    }
}

export default User