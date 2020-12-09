import React, { useContext } from 'react';
import MovieItemContext from '../context/movieItemContext/movieItemContext';

const About = () => {
    const movieItemContext = useContext(MovieItemContext);

    const { lang } = movieItemContext;
    if (lang === 'eng') {
        return (

            <main>
                <div className="about">
                    <h1>About the Project</h1>

                    <p>This WebApp was created with a single goal in mind: to make people's lives easier.
                    Whether you're looking for a specific recommendation based on your personal taste, or just a random movie suggestion, this app is for you.
                    The design is minimalistic and very intuitive, making the user experience effortless, even if you're on mobile.
                    If you'd like, there is a language button that allows you to use this app in Portuguese.
                    This app works around two main functions, available right away in the home page.
                    The first one, allows you to fill up a form with your preferences, and returns a list of movies based on that.
                    The second one returns a random movie.
                    These functions make requests to a NodeJS app that uses Express routes, middleware and route handlers to make GET requests to the Movie Database API.
                    After the object with the data is back from that API, the backend returns the data to the frontend, which then renders all of the information.
                    A third function is available once the list of movies was returned from the server, and that functions gets the movie's id and makes another request, but this time, to get more information about that particular movie.

                    To make this fullstack web app happen, I used ReactJS, NPM, Sass, Axios, Context API, Concurrently, Dotenv and Nodemon.
If you want to check out the code for this app on GitHub, the link is right below. Check out my <a href="https://www.arthurcavini.com" target="_blank" rel="noopener noreferrer" class="orange">portfolio</a> and follow me on social media.


                </p>
                    <div className="icons">
                        <a href="https://www.arthurcavini.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe fa-2x"></i></a>
                        <a href="https://github.com/cavini" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                        <a href="https://twitter.com/arthurcavini" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/cavini/" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-linkedin-in fa-2x"></i></a>
                    </div>
                    <div className="footer-note">
                        <div className="primary">

                            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                                <img src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"} alt="The movie database logo" />  </a>
                            <p className="block">This product uses the TMDb API but is not endorsed or certified by TMDb.
                            Todas as informações sobre os filmes são fornecidas pela API e seus colaboradores.</p>
                            <p>Design and programming by Arthur Cavini</p>


                        </div>

                        <div className="secondary">

                        </div>


                    </div>
                </div>



            </main>

        )
    } else {
        return (

            <main>
                <div className="about">
                    <h1>Sobre o projeto</h1>

                    <p>Este projeto surgiu da necessidade de buscar formas de entretenimento de forma rápida, fácil e descomplicada sem ter que passar pela experiência de ficar horas rolando por catálogos e listas de filmes pela internet e acabar desistindo. O maior foco desse aplicativo foi criar uma solução pensada em design responsivo e noções de UI/UX para deixar a experiência do usuário a mais agradável e intuitiva possível. Sua principal função, é através de um input mínimo do usuário, retornar uma lista personalizada e organizada de filmes de acordo com o seu gosto pessoal, ou se preferir, pode utilizar da função de busca aleatória e receber uma recomendação de filme, fazendo uma busca com valores escolhidos aleatoriamente dentro de arrays para cada parâmetro. Para colocar essa idéia em prática, precisei criar uma API em Express para esconder a minha API Key. Fiz uso dessas tecnologias também: React, NPM, Sass, NodeJS, Axios, Context API, Concurrently, Dotenv e Nodemon. Além de claro, utilizar a The Movie Database API para fornecer os filmes com suas informações. Para ver o código deste projeto e outros, o link do GitHub está aqui em baixo. Aproveite também para ver o restante do meu <a href="https://www.arthurcavini.com" target="_blank" rel="noopener noreferrer" class="orange">portfólio</a> e seguir nas redes sociais.

                </p>
                    <div className="icons">
                        <a href="https://www.arthurcavini.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe fa-2x"></i></a>
                        <a href="https://github.com/cavini" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
                        <a href="https://twitter.com/arthurcavini" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/cavini/" target="_blank" rel="noopener noreferrer"><i
                            className="fab fa-linkedin-in fa-2x"></i></a>
                    </div>
                    <div className="footer-note">
                        <div className="primary">

                            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
                                <img src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"} alt="The movie database logo" />  </a>
                            <p className="block">This product uses the TMDb API but is not endorsed or certified by TMDb.
                            Todas as informações sobre os filmes são fornecidas pela API e seus colaboradores.</p>
                            <p>Criação, desenvolvimento e design por Arthur Cavini</p>


                        </div>

                        <div className="secondary">

                        </div>


                    </div>
                </div>



            </main>

        )
    }

}

export default About
