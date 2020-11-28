import React from 'react';

const About = () => {
    return (

        <main>
            <div className="about">
                <h1>Sobre o projeto</h1>

                <p>Este projeto surgiu da necessidade de buscar formas de entretenimento de forma rápida, fácil e descomplicada sem ter que passar pela experiência de ficar horas rolando por catálogos e listas de filmes pela internet e acabar desistindo. O maior foco desse aplicativo foi criar uma solução pensada em design responsivo e noções de UI/UX para deixar a experiência do usuário a mais agradável e intuitiva possível. Sua principal função, é através de um input mínimo do usuário, retornar uma lista personalizada e organizada de filmes de acordo com o seu gosto pessoal, ou se preferir, pode utilizar da função de busca aleatória e receber uma recomendação de filme, fazendo uma busca com valores escolhidos aleatoriamente dentro de arrays para cada parâmetro. Para colocar essa idéia em prática, precisei criar uma API em Express para esconder a minha API Key. Fiz uso dessas tecnologias também: React, NPM, Sass, NodeJS, Axios, Context API, Concurrently, Dotenv e Nodemon. Além de claro, utilizar a The Movie Database API para fornecer os filmes com suas informações. Para ver o código deste projeto e outros, o link do GitHub está aqui em baixo. Aproveite também para ver o restante do meu portfólio e seguir nas redes sociais.

            </p>
                <div className="icons">
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

export default About
