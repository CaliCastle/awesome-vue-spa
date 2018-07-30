import axios from 'axios'

/**
 * 创建新axios对象
 */
const getClient = (baseUrl = null) => {

	const options = {
		baseURL: baseUrl
	}

	const client = axios.create(options)

	return client
}

class Client {
	constructor(baseUrl = null) {
		this.client = getClient(baseUrl)
	}

	request(type, url, conf = {}) {
		return this.client[type](url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	get(url, conf = {}) {
		return this.client.get(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	delete(url, conf = {}) {
		return this.client.delete(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	head(url, conf = {}) {
		return this.client.head(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	options(url, conf = {}) {
		return this.client.options(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	post(url, data = {}, conf = {}) {
		return this.client.post(url, data, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	put(url, data = {}, conf = {}) {
		return this.client.put(url, data, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}

	patch(url, data = {}, conf = {}) {
		return this.client.patch(url, data, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	}
}

export { Client }

/**
 * Base HTTP Client
 */
export default {
	request(type, url, conf = {}) {
		return getClient()[type](url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	get(url, conf = {}) {
		return getClient().get(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	delete(url, conf = {}) {
		return getClient().delete(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	head(url, conf = {}) {
		return getClient().head(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	options(url, conf = {}) {
		return getClient().options(url, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	post(url, data = {}, conf = {}) {
		return getClient().post(url, data, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	put(url, data = {}, conf = {}) {
		return getClient().put(url, data, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},

	patch(url, data = {}, conf = {}) {
		return getClient().patch(url, data, conf)
			.then(response => Promise.resolve(response))
			.catch(error => Promise.reject(error))
	},
}