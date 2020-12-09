import React, { Fragment, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MovieContext from '../context/movieContext/movieContext';
import MovieItemContext from '../context/movieItemContext/movieItemContext';
import AlertContext from '../context/alert/alertContext';

const MovieSelector = () => {



    const movieContext = useContext(MovieContext);
    const movieItemContext = useContext(MovieItemContext);
    const alertContext = useContext(AlertContext);
    const history = useHistory();


    const { lang } = movieItemContext;
    const { getMovies, movieGenre } = movieContext;
    const { setAlert } = alertContext;

    const [movie, setMovie] = useState({
        with_genres: '',
        sort_by: '',
        certification: '',
        genre: '',
    });




    const { with_genres, sort_by, certification } = movie;





    const onChange = e => setMovie({
        ...movie, [e.target.name]: e.target.value


    });

    const redirect = (argument) => {
        history.push(`/${argument}`)
    }

    if (movieGenre) {
        redirect("movielist");
    }


    const onSubmit = e => {
        e.preventDefault();
        if (certification === '' || sort_by === '' || with_genres === '') {
            if (lang === 'eng') {
                setAlert('Please fill in all fields', 'danger')
            } else {
                setAlert('Por favor preencha todos os campos', 'danger')
            }

        } else {
            getMovies({ movie, lang });
        }





    }

    const onClick = e => setMovie({
        ...movie, genre: e.target.selectedOptions[0].text

    })



    const getRandomGenre = () => {
        redirect("moviepage");
    }







    return (
        <Fragment>
            <div className="content">
                <div className="primary">
                    {lang === 'eng' ? (<h1>What do you want to watch today?</h1>) : (<h1>O que você quer assistir hoje?</h1>)}

                    {lang === 'eng' ? (<form className="botoes" onSubmit={onSubmit}>
                        <label>Genre</label>
                        <select className="select-css" name="with_genres" onClick={onClick} onChange={onChange} >
                            <option value="0">Select</option>
                            <option value="28" name="Action" className="active">Action</option>
                            <option value="12" name="Adventure">Adventure</option>
                            <option value="16" name="Animation">Animation</option>
                            <option value="35" name="Comedy">Comedy</option>
                            <option value="80" name="Crime">Crime</option>
                            <option value="99" name="Documentary">Documentary</option>
                            <option value="18" name="Drama">Drama</option>
                            <option value="10751" name="Family">Family</option>
                            <option value="14" name="Fantasy">Fantasy</option>
                            <option value="36" name="History">History</option>
                            <option value="27" name="Horror">Horror</option>
                            <option value="10402" name="Musicals">Musicals</option>
                            <option value="9648" name="Mystery">Mystery</option>
                            <option value="10749" name="Romance">Romance</option>
                            <option value="878" name="Sci-fi">Sci-fi</option>
                            <option value="10752" name="War">War</option>
                            <option value="37" name="Wild-West">Wild-West</option>
                        </select>
                        <label>Sort By</label>
                        <select className="select-css" name="sort_by" onChange={onChange}>
                            <option value="0">Select</option>
                            <option value="popularity.desc">Most Popular</option>
                            <option value="popularity.asc">Least Popular</option>
                            <option value="vote_average.desc">Highest Ratings</option>
                            <option value="vote_average.asc">Lowest Ratings</option>
                            <option value="vrevenue.desc">Biggest Revenue</option>
                            <option value="primary_release_date.desc">Most Recent</option>
                            <option value="primary_release_date.asc">Oldest</option>
                        </select>
                        <label>Content Rating</label>
                        <select className="select-css" name="certification" onChange={onChange}>
                            <option value="0">Select</option>
                            <option value="G">G</option>
                            <option value="PG-13">PG-13</option>
                            <option value="R">R</option>
                            <option value="NC-17">NC-17</option>
                            <option value="PG">PG</option>
                        </select>
                        <button><i className="fas fa-search"></i></button>
                    </form>) : (<form className="botoes" onSubmit={onSubmit}>
                        <label>Gênero</label>
                        <select className="select-css" name="with_genres" onClick={onClick} onChange={onChange} >
                            <option value="0">Selecione</option>
                            <option value="28" name="Ação" className="active">Ação</option>
                            <option value="12" name="Aventura">Aventura</option>
                            <option value="16" name="Animação">Animação</option>
                            <option value="35" name="Comédia">Comédia</option>
                            <option value="80" name="Crime">Crime</option>
                            <option value="99" name="Documentários">Documentários</option>
                            <option value="18" name="Drama">Drama</option>
                            <option value="10751" name="Família">Família</option>
                            <option value="14" name="Fantasia">Fantasia</option>
                            <option value="36" name="História">História</option>
                            <option value="27" name="Terror">Terror</option>
                            <option value="10402" name="Musicais">Musicais</option>
                            <option value="9648" name="Mistério">Mistério</option>
                            <option value="10749" name="Romance">Romance</option>
                            <option value="878" name="Sci-fi">Sci-fi</option>
                            <option value="10752" name="Guerra">Guerra</option>
                            <option value="37" name="Velho-Oeste">Velho-Oeste</option>
                        </select>
                        <label>Organizar por</label>
                        <select className="select-css" name="sort_by" onChange={onChange}>
                            <option value="0">Selecione</option>
                            <option value="popularity.desc">Mais populares</option>
                            <option value="popularity.asc">Menos populares</option>
                            <option value="vote_average.desc">Maiores notas</option>
                            <option value="vote_average.asc">Menores notas</option>
                            <option value="vrevenue.desc">Sucesso de bilheteria</option>
                            <option value="primary_release_date.desc">Mais Recentes</option>
                            <option value="primary_release_date.asc">Mais Antigos</option>
                        </select>
                        <label>Classificação Indicativa</label>
                        <select className="select-css" name="certification" onChange={onChange}>
                            <option value="0">Selecione</option>
                            <option value="L">Livre</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18+</option>
                        </select>
                        <button><i className="fas fa-search"></i></button>
                    </form>)}

                </div>
                {lang === 'eng' ? (<div className="random-search"><h2>I don't know! Get me a Random Movie!</h2>
                    <button onClick={getRandomGenre}>
                        <i className="fas fa-random"></i></button></div>) : (<div className="random-search"><h2>Não sei, qualquer coisa serve!</h2>
                            <button onClick={getRandomGenre}>Aleatório <i className="fas fa-random"></i></button></div>)}


            </div>
        </Fragment>
    )
}

export default MovieSelector;
