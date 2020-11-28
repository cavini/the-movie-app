import { GET_ERROR, GET_MOVIES, GET_MOVIE_DETAILS, SET_MOVIE_GENRE, GET_RANDOM_MOVIE, CLEAR_MOVIES } from '../../../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case GET_RANDOM_MOVIE:
            return {
                ...state,
                randomMovie: action.payload
            }
        case SET_MOVIE_GENRE:
            return {
                ...state,
                movieGenre: action.payload
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                singleMovie: action.payload
            }
        case CLEAR_MOVIES:
            return {
                ...state,
                movies: null,
                movieGenre: null,
                randomMovie: null
            }
        case GET_ERROR: {
            return {
                ...state,
                movies: null,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
