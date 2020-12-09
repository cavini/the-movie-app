import React, { useReducer } from 'react';
import axios from 'axios';
import { GET_MOVIE_DETAILS, GET_ERROR, PORTUGUESE, ENGLISH } from '../../../../types';
import MovieItemReducer from '../movieItemContext/movieItemReducer';
import MovieItemContext from '../movieItemContext/movieItemContext';

const MovieItemState = (props) => {
    const initialState = {
        movieDetails: null,
        lang: 'eng',
        error: null

    };

    const [state, dispatch] = useReducer(MovieItemReducer, initialState);

    const changeLang = () => {
        if (state.lang === 'eng') {
            dispatch({ type: PORTUGUESE, payload: 'pt' });

        } else {
            dispatch({ type: ENGLISH, payload: 'eng' });
        }





    }


    const getMovieDetails = async (obj) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        try {
            const res = await axios.post('/api/movie/details', obj, config)





            dispatch({ type: GET_MOVIE_DETAILS, payload: res.data });




        } catch (err) {
            dispatch({ type: GET_ERROR, payload: err.status_message });
        }

    }





    return (
        <MovieItemContext.Provider value={{
            movieDetails: state.movieDetails,
            lang: state.lang,
            changeLang,
            getMovieDetails
        }}>
            {props.children}

        </MovieItemContext.Provider>
    )
}

export default MovieItemState
