import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import MovieContext from '../../context/movieContext/movieContext';
import MovieItemContext from '../../context/movieItemContext/movieItemContext';


const NavbarItems = () => {

    const [active, setActive] = useState(false);

    const movieItemContext = useContext(MovieItemContext);

    const { lang, changeLang } = movieItemContext;

    const movieContext = useContext(MovieContext);

    const { clearMovies } = movieContext;

    const onClick = () => {

        if (active) {
            setActive(!active)

        }
        clearMovies();
    }

    const checkAndSetLang = () => {
        changeLang()

    }


    return (
        <Fragment>
            <div className="logo">
                {lang === 'eng' ? (<a onClick={onClick}><Link to='/'>Recommend me a Movie</Link></a>) : (<a onClick={onClick}><Link to='/'>Me Recomende um Filme</Link></a>)}
            </div>
            <ul className={active ? "nav-active" : "nav-links"}>
                {lang === 'eng' ? (<Fragment><li onClick={onClick}><Link to='/'>Home</Link></li>
                    <li onClick={onClick}><Link to='/about'>About</Link></li>
                    <div className="language-settings"><i class="fas fa-language fa-2x"></i><button onClick={checkAndSetLang}>PT</button></div>
                </Fragment>) : (<Fragment><li onClick={onClick}><Link to='/'>Início</Link></li>
                    <li onClick={onClick}><Link to='/about'>Sobre</Link></li>
                    <div className="language-settings"><i class="fas fa-language fa-2x"></i> <button onClick={checkAndSetLang}>ENG</button></div></Fragment>)}

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
