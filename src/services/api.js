const URL = {
	BASE: process.env.NODE_ENV === 'production' ? 'https://api.tvmaze.com' : 'http://api.tvmaze.com',
	SEARCH: '/search/shows?q=',
	SCHEDULE: '/schedule',
	SHOWS: '/shows',
	EMBED_CAST: 'embed[]=cast'
}

export const API = {
	getShowsByQuery: q => fetch(`${URL.BASE}${URL.SEARCH}${q}`),
	getShowDetails: (id) => fetch(`${URL.BASE}${URL.SHOWS}/${id}?${URL.EMBED_CAST}`)
}
