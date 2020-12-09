import { GET_MOVIE_DETAILS, GET_ERROR, PORTUGUESE, ENGLISH } from '../../../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            console.log(action.payload)
            return {
                ...state,
                movieDetails: action.payload
            }

        case PORTUGUESE: {
            console.log(action)
            console.log(action.payload)
            console.log(typeof (action.payload))
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
