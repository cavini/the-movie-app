import React, { useContext } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import MovieItemContext from '../context/movieItemContext/movieItemContext';



const Movieitem = ({ movie }) => {

    const movieItemContext = useContext(MovieItemContext);


    const { getMovieDetails, lang } = movieItemContext;


    if (!movie.release_date.includes("/")) {
        const year = movie.release_date.slice(0, 4)

        const month = movie.release_date.slice(5, 7)
        const day = movie.release_date.slice(8, 11)
        movie.release_date = `${day}/${month}/${year}`
    }


    const history = useHistory();

    const redirect = () => {
        history.push('/moviedetails')
    }

    const onClick = async () => {
        await getMovieDetails({ movie, lang });
        redirect();


    }








    if (lang === 'eng') {
        return (
            <div className="movie-item">
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} movie poster`} />
                {/* <h3>Sinopse:</h3>
                <p>{movie.overview}</p> */}

                {movie.overview ? (
                    <><h3>{"Synopsis:"}</h3><p>{movie.overview}</p></>) : <p>Couldn't find this movie's synopsis.</p>}


                {movie.vote_average !== 0 ?
                    (<h4>Rating: {<span className="thin">{`${movie.vote_average}/10`}</span>}</h4>) : <h4>Not Available</h4>}
                {movie.release_date ? (
                    <h4>Release date: {<span className="thin">{movie.release_date}</span>}</h4>) : <h4><span className="thin">Not Available</span></h4>}



                <a className="ver-mais" onClick={onClick}>See more</a>
                <a className="ver-sinopse" onClick={onClick}>See full synopsis</a>

            </div>
        )
    } else {
        return (
            <div className="movie-item">
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster do filme ${movie.title}`} />
                {/* <h3>Sinopse:</h3>
                <p>{movie.overview}</p> */}

                {movie.overview ? (
                    <><h3>{"Sinopse:"}</h3><p>{movie.overview}</p></>) : <p>Não foi possível encontrar a sinopse deste filme.</p>}


                {movie.vote_average !== 0 ?
                    (<h4>Nota: {<span className="thin">{`${movie.vote_average}/10`}</span>}</h4>) : <h4>Sem nota</h4>}
                {movie.release_date ? (
                    <h4>Data de Lançamento: {<span className="thin">{movie.release_date}</span>}</h4>) : <h4><span className="thin">Data de lançamento indisponível</span></h4>}



                <a className="ver-mais" onClick={onClick}>Ver mais</a>
                <a className="ver-sinopse" onClick={onClick}>Ver sinopse completa</a>

            </div>
        )
    }


}

export default withRouter(Movieitem);
