import { GET_MOVIE_DETAILS, GET_ERROR, PORTUGUESE, ENGLISH } from '../../../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.payload
            }

        case PORTUGUESE: {
            return {
                ...state,
                lang: action.payload
            }
        }
        case ENGLISH: {
            return {
                ...state,
                lang: action.payload
            }
        }
        case GET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }
}
