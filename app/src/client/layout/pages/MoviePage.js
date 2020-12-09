import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import MovieContext from '../context/movieContext/movieContext';
import MovieItemContext from '../context/movieItemContext/movieItemContext';



const MoviePage = () => {
    const movieContext = useContext(MovieContext);
    const movieItemContext = useContext(MovieItemContext);

    const { getRandomMovie, randomMovie } = movieContext;
    const { lang } = movieItemContext;

    const history = useHistory();
    const onClick = () => {
        history.push('/');
    }


    useEffect(() => {
        getRandomMovie({ lang })
        // eslint-disable-next-line
    }, []);

    const clicked = () => {
        getRandomMovie({ lang });
    }


    if (lang === 'eng') {
        return (
            (randomMovie ? <div className="movie-page">
                <div className="movie-list-details">
                    <div className="movie-item-details">
                        <h2>{randomMovie.title}</h2>
                        <div className="main-details">
                            <img src={`https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`} alt="" />
                            <div className="main-details2">
                                {randomMovie.overview.length > 0 ? (<h3>Synopsis: {<span className="paragraph">{randomMovie.overview}</span>}</h3>) : (<p>Couldn't find this movie's synopsis.</p>)}

                            </div>
                        </div>
                        <div className="extended-details">
                            {randomMovie.budget !== '0.00' ? (<h4>Budget: ${<span className="thin">{randomMovie.budget}</span>}</h4>) : null}

                            {randomMovie.revenue !== '0.00' ? (<h4>Revenue: ${<span className="thin">{randomMovie.revenue}</span>}</h4>) : null}


                            <h4>Genres: {randomMovie.genres.map(genre => {
                                return <span className="thin">{genre.name} </span>
                            })}</h4>
                            <h4>Release Date: {<span className="thin">{randomMovie.release_date}</span>}</h4>
                            <h4>Runtime: {<span className="thin">{`${randomMovie.runtime} minutes`}</span>}</h4>
                            <h4>Rating: {<span className="thin">{`${randomMovie.vote_average}/10 `}</span>}</h4>
                            <h4>{randomMovie.vote_count} {<span className="thin">users rated this movie.</span>}</h4>
                        </div>
                    </div>
                    <div className="try-again">Didn't like this movie? Try a random search!
                    <button onClick={clicked}><i className="fas fa-random fa-lg"></i></button>
                    </div>
                </div>

                <button onClick={onClick}>Go back to the movie list</button>



            </div> : <div className="movie-page">
                    <div className="movie-list-details">
                        <div className="movie-item-details">
                            <h2>Looking for movies...</h2>
                        </div>
                    </div>
                </div>))

    } else {
        return (
            (randomMovie ? <div className="movie-page">
                <div className="movie-list-details">
                    <div className="movie-item-details">
                        <h2>{randomMovie.title}</h2>
                        <div className="main-details">
                            <img src={`https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`} alt="" />
                            <div className="main-details2">
                                {randomMovie.overview.length > 0 ? (<h3>Sinopse: {<span className="paragraph">{randomMovie.overview}</span>}</h3>) : (<p>Não foi possível encontrar a sinopse deste filme.</p>)}

                            </div>
                        </div>
                        <div className="extended-details">
                            {randomMovie.budget !== '0.00' ? (<h4>Orçamento: ${<span className="thin">{randomMovie.budget}</span>}</h4>) : null}

                            {randomMovie.revenue !== '0.00' ? (<h4>Bilheteria: ${<span className="thin">{randomMovie.revenue}</span>}</h4>) : null}


                            <h4>Gêneros: {randomMovie.genres.map(genre => {
                                return <span className="thin">{genre.name} </span>
                            })}</h4>
                            <h4>Data de lançamento: {<span className="thin">{randomMovie.release_date}</span>}</h4>
                            <h4>Duração: {<span className="thin">{`${randomMovie.runtime} minutos`}</span>}</h4>
                            <h4>Nota: {<span className="thin">{`${randomMovie.vote_average}/10 `}</span>}</h4>
                            <h4>{randomMovie.vote_count} {<span className="thin">usuários avalariam este filme.</span>}</h4>
                        </div>
                    </div>
                    <div className="try-again">Não gostou? Pesquisa aleatória!
                    <button onClick={clicked}><i className="fas fa-random fa-lg"></i></button>
                    </div>
                </div>

                <button onClick={onClick}>Voltar para a lista de filmes</button>



            </div> : <div className="movie-page">
                    <div className="movie-list-details">
                        <div className="movie-item-details">
                            <h2>Aguarde enquanto procuramos um filme.</h2>
                        </div>
                    </div>
                </div>))

    }










}

export default MoviePage;
