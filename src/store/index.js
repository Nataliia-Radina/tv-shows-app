import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '@/services/api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const fetchData = ({ context, name, mutation }, options) => {
	API[name](options)
		.then(response => response.json())
		.then(data => {
			context.commit('setError', false)
			context.commit(mutation, { data, options })
		})
		.catch(() => {
			context.commit('setError', true)
		})
}

export const state = () => ({
	searchQuery: '',
	previousUrl: '/',
	showsByGenre: {},
	searchResults: [],
	hasError: false,
	showDetails: {}
})

export const mutations = {
	setShowsByGenre (state, { data, options }) {
		Vue.set(state.showsByGenre, options, data)
	},
	setSearchResults (state, { data, options }) {
		state.searchQuery = options
		state.searchResults = data
	},
	setShowDetails (state, { data }) {
		state.showDetails = data
	},
	setPreviousUrl (state, url) {
		state.previousUrl = url
	},
	setError (state, data) {
		state.hasError = data
	}
}

export const actions = {
	updatePreviousUrl (context, url) {
		context.commit('setPreviousUrl', url)
	},
	updateSearchQuery (context, query) {
		context.commit('setSearchQuery', query)
	},
	getShowsByGenre (context, genres) {
		genres.map((genre) => {
			fetchData({ context, name: 'getShowsByQuery', mutation: 'setShowsByGenre' }, genre)
		})
	},
	getShowsByQuery (context, query) {
		fetchData({ context, name: 'getShowsByQuery', mutation: 'setSearchResults' }, query)
	},
	getShowDetails (context, id) {
		fetchData({ context, name: 'getShowDetails', mutation: 'setShowDetails' }, id)
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	plugins: [
		createPersistedState({
			paths: ['previousUrl', 'searchQuery']
		})
	]
})
