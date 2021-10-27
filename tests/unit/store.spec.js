import { mutations, state } from '@/store/index'

const shows = {
    'action':
    [{
        id: 1,
        name: 'show1',
        airtime: '00:00',
        genres: ['drama']
    },
    {
        id: 2,
        name: 'show2',
        airtime: '00:30',
        genres: ['comedy']
    }]
}

const searchShows = [{
        id: 1,
        name: 'show1',
        airtime: '00:00',
        genres: ['drama']
    },
    {
        id: 2,
        name: 'show2',
        airtime: '00:30',
        genres: ['comedy']
    }]


const showDetails = {
    id: 1,
    name: 'show1',
    airtime: '00:00',
    genres: ['drama']
}

describe('mutations', () => {
    it('setSearchResults should set correct data', () => {
        const query = 'some show name'
        mutations.setSearchResults(state, { data: searchShows, options: query})
        expect(state.searchQuery).toEqual(query)
        expect(state.searchResults).toEqual(searchShows)
    })

    it('setShowDetails should set correct data', () => {
        mutations.setShowDetails(state, showDetails)
        expect(state.showDetails).toEqual(showDetails)

    })

    it('setPreviousUrl should set correct data', () => {
        const url = '/app'
        mutations.setPreviousUrl(state, url)
        expect(state.previousUrl).toEqual(url)
    })

    it('should set hasError correctly', () => {
        mutations.setError(state, true)
        expect(state.hasError).toEqual(true)
        mutations.setError(state, false)
        expect(state.hasError).toEqual(false)
    })

})
