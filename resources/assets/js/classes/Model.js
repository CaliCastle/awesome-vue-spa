class Model {
	constructor(attributes: ?{}) {
		if (attributes == null) return

		// Map attributes from object
		const keys = Object.keys(attributes)

		for (let index in keys) {
			this[ keys[ index ] ] = attributes[ keys[ index ] ]
		}
	}

	static parse(props: ?{}): ?Model {
		return props == null ? new Model(props) : null
	}
}

export default Model