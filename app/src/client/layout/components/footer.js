import React, { useContext } from 'react'
import MovieItemContext from '../context/movieItemContext/movieItemContext';

const Footer = () => {
    const movieItemContext = useContext(MovieItemContext);

    const { lang } = movieItemContext;
    if (lang === 'eng') {
        return (
            <footer>
                <div className="footer">
                    <p>Recommend me a Movie - 2020</p>
                </div>
            </footer>
        )
    } else {
        return (
            <footer>
                <div className="footer">
                    <p>Me Recomende um Filme - 2020</p>
                </div>
            </footer>
        )
    }

}

export default Footer
