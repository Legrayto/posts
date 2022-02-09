import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		users: [],
		posts: [],
		comments: [],
		loading: false,
  },
  mutations: {
		setUsers(state, users) {
			state.users = users
		},
		setPosts(state, posts) {
			state.posts = posts
		},
		setComments(state, comments) {
			state.comments = comments
		},
		addComment(state, comment) {
			state.comments.unshift(comment)
		},
		setLoad(state, load) {
			state.loading = load
		}
  },
  actions: {
		async setPostsUsers({commit, dispatch}) {
			commit('setLoad', true)
			await dispatch('setUsers')
			await dispatch('setPosts')
			commit('setLoad', false)
		},
		setUsers({commit}) {
			return fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then(res => {
					commit('setUsers', res)
				})
				.catch(err => {
					console.log(err)
				})
			
		},
		setPosts({commit}) {
			return fetch('https://jsonplaceholder.typicode.com/posts')
				.then(res => res.json())
				.then(res => {
					commit('setPosts', res)
				})
				.catch(err => {
					console.log(err)
				})
		},
		filterPosts({commit}, userId) {
			commit('setLoad', true)
			fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
				.then(res => res.json())
				.then(res => {
					commit('setPosts', res)
					commit('setLoad', false)
				})
				.catch(err => {
					console.log(err)
					commit('setLoad', false)
				})
			
		},
		setFilterComments({commit}, postId) {
			return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
				.then(res => res.json())
				.then(res => {
					commit('setComments', res)
				})
				.catch(err => {
					console.log(err)
				})
		
		},
		addComment({commit}, comment) {
			return fetch('https://jsonplaceholder.typicode.com/comments', {
				method: 'POST',
				body: JSON.stringify({
					postId: comment.postId,
					name: comment.title,
					body: comment.comment,
					email: comment.email
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			})
			.then(res => res.json())
			.then((res) => {
				commit('addComment', res)
			})
			.catch(err => {
				console.log(err)
			})
		}

  },
	getters: {
		users(state) {
			return state.users
		},
		user(state, getters) {
			return (userId) => getters.users.find(item => item.id === userId)
		},
		userByName(state,getters) {
			return (userName) => getters.users.find(item => item.username === userName)
		},
		posts(state) {
			return state.posts
		},
		post(state, getters) {
			return (postId) => {return getters.posts.find(item => item.id === +postId)}
		},
		comments(state) {
			return state.comments
		},
		load(state) {
			return state.loading
		}

	},
  modules: {
  }
})
