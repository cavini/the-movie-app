import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MovieContext from '../context/movieContext/movieContext';
import AlertContext from '../context/alert/alertContext';

const MovieSelector = () => {



    const movieContext = useContext(MovieContext);
    const alertContext = useContext(AlertContext);
    const history = useHistory();



    const { getMovies, movieGenre, randomMovie, getRandomMovie } = movieContext;
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
            setAlert('Por favor preencha todos os campos', 'danger')
        } else {
            getMovies(movie);
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
                    <h1>O que você quer assistir hoje?</h1>

                    <form className="botoes" onSubmit={onSubmit}>
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
                    </form>
                </div>
                <div className="random-search"><h2>Não sei, qualquer coisa serve!</h2>
                    <button onClick={getRandomGenre}>Aleatório <i className="fas fa-random"></i></button></div>

            </div>
        </Fragment>
    )
}

export default MovieSelector;
