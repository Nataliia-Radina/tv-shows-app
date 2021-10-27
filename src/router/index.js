import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/search',
		name: 'Search',
		component: Search
	},
	{
		name: 'Details',
		path: '/show/:id',
		props: true,
		component: () => import(/* webpackChunkName: "about" */ '../views/ShowDetails.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: '/tv-shows-app/',
	routes
})

export default router
