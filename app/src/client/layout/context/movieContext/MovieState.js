import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import MovieContext from './movieContext'
import MovieItemContext from '../../context/movieItemContext/movieItemContext'
import { GET_ERROR, GET_MOVIES, SET_MOVIE_GENRE, GET_RANDOM_MOVIE, CLEAR_MOVIES } from '../../../../types'
import movieReducer from './movieReducer';


const MovieState = (props) => {
    const initialState = {
        movies: null,
        error: null,
        movieGenre: null,
        randomMovie: null,
    };




    const [state, dispatch] = useReducer(movieReducer, initialState);

    const movieItemContext = useContext(MovieItemContext);

    const { lang } = movieItemContext;





    const getMovies = async (obj) => {
        const { genre } = obj.movie;

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/movies', obj, config)



            dispatch({ type: GET_MOVIES, payload: res.data.results });
            dispatch({ type: SET_MOVIE_GENRE, payload: genre })

        } catch (err) {
            dispatch({ type: GET_ERROR, payload: err.status_message });
        }

    }

    const clearMovies = () => {


        dispatch({ type: CLEAR_MOVIES })
    }

    const getRandomMovie = async (language) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {


            const res = await axios.post('/api/random-movie', language, config)


            dispatch({ type: GET_RANDOM_MOVIE, payload: res.data });




        } catch (err) {
            dispatch({ type: GET_ERROR, payload: err.message });
        }




    }






    return (
        <MovieContext.Provider value={{
            movies: state.movies,
            error: state.error,
            movieGenre: state.movieGenre,
            randomMovie: state.randomMovie,
            getMovies,
            getRandomMovie,
            clearMovies,
        }}>
            {props.children}

        </MovieContext.Provider>
    )
};

export default MovieState
