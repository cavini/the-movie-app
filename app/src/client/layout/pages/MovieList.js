import React, { Fragment, useContext } from 'react';

import { useHistory } from 'react-router-dom';
import MovieItem from '../components/MovieItem';
import MovieContext from '../context/movieContext/movieContext';




const MovieList = () => {

    const history = useHistory();

    const movieContext = useContext(MovieContext);



    const { movies, movieGenre, clearMovies } = movieContext;

    const onClick = () => {
        clearMovies();
        history.push('/');
    }

    const getRandomMovie = () => {
        history.push('/moviepage');
    }

    if (movies) {
        return (
            <main>
                <div className="movie-page">
                    <Fragment>{movies.length > 0 ? (<h1>Encontramos estes filmes de {movieGenre} para você!</h1>) : <h2>Não encontramos nenhum filme com essa combinação, quer tentar novamente?</h2>}</Fragment>
                    <div className="movie-list">


                        {movies && movies.map(movie => (<MovieItem key={movie.id} movie={movie} />))}
                    </div>

                    <div className="secondary-buttons">
                        <button onClick={onClick}>Voltar para a seleção de filmes</button>
                        <button onClick={getRandomMovie}>Mudei de idéia, escolhe um filme pra mim!</button>
                    </div>
                </div>
            </main>
        )
    } else {
        history.push('/')
        return null

    }


}



export default MovieList
