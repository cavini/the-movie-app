import React, { useReducer } from 'react';
import axios from 'axios';
import { GET_MOVIE_DETAILS, GET_ERROR } from '../../../../types';
import MovieItemReducer from '../movieItemContext/movieItemReducer';
import MovieItemContext from '../movieItemContext/movieItemContext';

const MovieItemState = (props) => {
    const initialState = {
        movieDetails: null,
        error: null

    };

    const [state, dispatch] = useReducer(MovieItemReducer, initialState);


    const getMovieDetails = async (movie) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        try {
            const res = await axios.post('/api/movie/details', movie, config)





            dispatch({ type: GET_MOVIE_DETAILS, payload: res.data });




        } catch (err) {
            dispatch({ type: GET_ERROR, payload: err.status_message });
        }

    }





    return (
        <MovieItemContext.Provider value={{
            movieDetails: state.movieDetails,
            getMovieDetails
        }}>
            {props.children}

        </MovieItemContext.Provider>
    )
}

export default MovieItemState
