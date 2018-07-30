import User             from './models/User'
import { LocalStorage } from './storage/LocalStorage'

const Local = new LocalStorage()

class Auth {

	// Properties
	token: ?string
	user: ?User

	constructor() {
		this.token = Local.get(Local.keys.OAuth.Token)
		this.user = User.parse(Local.get(Local.keys.OAuth.User))
	}

	/**
	 * 检查用户状态登陆与否
	 *
	 * @returns {boolean}
	 */
	checkAuthentication(): boolean {
		if (this.token != null) {
			axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${this.token}`

			this.fetchUser()

			return true
		}

		return false
	}

	/**
	 * 从API读取用户信息
	 */
	fetchUser() {
		Client.get('/me')
			.then(({ data }) => {
				this.user = User.parse(data)
			})
			.catch(error => {
			})
	}

	/**
	 * 验证成功，存入用户数据
	 *
	 * @param token
	 * @param user
	 */
	login(token, user) {
		this.token = token
		this.user = user

		axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${token}`

		Local.save(Local.keys.OAuth.Token, token)
		Local.save(Local.keys.OAuth.User, JSON.stringify(user))

		Event.fire(Event.types.UserLoggedIn)
	}

	/**
	 * 注销当前用户
	 */
	logout() {
		Client.post('/logout')
			.then(() => {
			})

		this.reset()

		Local.delete(Local.keys.OAuth.Token)
		Local.delete(Local.keys.OAuth.User)

		Event.fire(Event.types.UserLoggedOut)
	}

	reset() {
		this.token = null
		this.user = null
	}
}

export default Auth