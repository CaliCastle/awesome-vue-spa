const storage_keys = {
	OAuth: {
		Token: 'oauth-token',
		User: 'oauth-user',
	}
}

class LocalStorage {

	// Properties
	keys: Object
	_storage: Object

	constructor() {
		this.keys = storage_keys
		this._storage = window.localStorage
	}

	get(key: string): ?string {
		return this._storage.getItem(key)
	}

	save(key: string, value: string) {
		this._storage.setItem(key, value)
	}

	delete(key: string) {
		this._storage.removeItem(key)
	}

}

export { LocalStorage }

const getStorage = () => {
	return new LocalStorage()
}

export default {
	keys(): Object {
		return getStorage().keys
	},

	get(key: string): ?string {
		return getStorage().get(key)
	},

	save(key: string, value: string) {
		return getStorage().save(key, value)
	},

	delete(key: string) {
		return getStorage().delete(key)
	}
}
