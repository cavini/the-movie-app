import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import MovieContext from '../../context/movieContext/movieContext';


const NavbarItems = () => {

    const [active, setActive] = useState(false);

    const movieContext = useContext(MovieContext);

    const { clearMovies } = movieContext;

    const onClick = () => {

        if (active) {
            setActive(!active)

        }
        clearMovies();
    }
    return (
        <Fragment>
            <div className="logo">
                <a onClick={onClick}><Link to='/'>Me Recomende um Filme</Link></a>
            </div>
            <ul className={active ? "nav-active" : "nav-links"}>
                <li onClick={onClick}><Link to='/'>Início</Link></li>
                <li onClick={onClick}><Link to='/about'>Sobre</Link></li>
            </ul>
            <div className={active ? "toggle burger" : "burger"} onClick={() => setActive(!active)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </Fragment>
    )
}

export default NavbarItems
