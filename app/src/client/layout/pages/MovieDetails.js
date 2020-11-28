import React, { useContext, Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import MovieItemContext from '../context/movieItemContext/movieItemContext'

const MovieDetails = () => {
    const movieItemContext = useContext(MovieItemContext);

    const { movieDetails } = movieItemContext;

    const redirect = (argument) => {
        history.push(`${argument}`)
    }

    const history = useHistory();
    const onClick = () => {
        redirect('/movielist');
    }

    const clicked = () => {
        redirect('/moviepage');
    }



    return (
        <Fragment>
            {movieDetails ? (<div className="movie-page">
                <div className="movie-list-details">
                    <div className="movie-item-details">
                        <h2>{movieDetails.title}</h2>
                        <div className="main-details">
                            <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt="" />
                            <div className="main-details2">
                                {movieDetails.overview.length > 0 ? (<h3>Sinopse: {<span className="paragraph">{movieDetails.overview}</span>}</h3>) : (<p>Não foi possível encontrar a sinopse deste filme.</p>)}

                            </div>
                        </div>
                        <div className="extended-details">
                            {movieDetails.budget !== '0.00' ? (<h4>Orçamento: ${<span className="thin">{movieDetails.budget}</span>}</h4>) : null}

                            {movieDetails.revenue !== '0.00' ? (<h4>Bilheteria: ${<span className="thin">{movieDetails.revenue}</span>}</h4>) : null}


                            <h4>Gêneros: {movieDetails.genres.map(genre => {
                                return <span className="thin">{genre.name} </span>
                            })}</h4>
                            <h4>Data de lançamento: {<span className="thin">{movieDetails.release_date}</span>}</h4>
                            <h4>Duração: {<span className="thin">{`${movieDetails.runtime} minutos`}</span>}</h4>
                            <h4>Nota: {<span className="thin">{`${movieDetails.vote_average}/10 `}</span>}</h4>
                            <h4>{movieDetails.vote_count} {<span className="thin">usuários avalariam este filme.</span>}</h4>
                        </div>
                    </div>
                    <div className="try-again">Não gostou? Pesquisa aleatória!
                    <button onClick={clicked}><i className="fas fa-random fa-lg"></i></button>
                    </div>
                </div>

                <button onClick={onClick}>Voltar para a lista de filmes</button>



            </div>) : (redirect('/'))}
        </Fragment>

    )







}

export default MovieDetails;
