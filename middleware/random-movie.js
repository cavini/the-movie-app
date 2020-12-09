const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();




router.post('/api/random-movie', async (req, res) => {
    const { lang } = req.body;
    const getMovies = async () => {

        const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

        const genres = [0, 28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 37]

        const randomGenre = genres[Math.floor(Math.random() * genres.length)];


        if (lang === 'eng') {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&certification_country=US&with_genres=${(randomGenre)}`)




            const randomM = Math.floor(Math.random() * response.data.results.length)
            const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${response.data.results[randomM].id}?api_key=${API_KEY}&language=en-US`)


            const year = res2.data.release_date.slice(0, 4)



            const month = res2.data.release_date.slice(5, 7)
            const day = res2.data.release_date.slice(8, 11)
            res2.data.release_date = `${day}/${month}/${year}`



            function formatMoney(amount, secondAmount, decimalCount = 2, decimal = ".", thousands = ",") {


                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;



                res2.data.budget = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");


                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const secondNegativeSign = secondAmount < 0 ? "-" : "";

                let i2 = parseInt(secondAmount = Math.abs(Number(secondAmount) || 0).toFixed(decimalCount)).toString();
                let j2 = (i2.length > 3) ? i2.length % 3 : 0;



                res2.data.revenue = secondNegativeSign + (j2 ? i2.substr(0, j2) + thousands : '') + i2.substr(j2).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(secondAmount - i2).toFixed(decimalCount).slice(2) : "");















            }

            formatMoney(res2.data.budget, res2.data.revenue)

            return res2.data
        } else {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&certification_country=BR&with_genres=${(randomGenre)}`)




            const randomM = Math.floor(Math.random() * response.data.results.length)
            const res2 = await axios.get(`https://api.themoviedb.org/3/movie/${response.data.results[randomM].id}?api_key=${API_KEY}&language=pt-BR`)


            const year = res2.data.release_date.slice(0, 4)



            const month = res2.data.release_date.slice(5, 7)
            const day = res2.data.release_date.slice(8, 11)
            res2.data.release_date = `${day}/${month}/${year}`



            function formatMoney(amount, secondAmount, decimalCount = 2, decimal = ".", thousands = ",") {


                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;



                res2.data.budget = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");


                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const secondNegativeSign = secondAmount < 0 ? "-" : "";

                let i2 = parseInt(secondAmount = Math.abs(Number(secondAmount) || 0).toFixed(decimalCount)).toString();
                let j2 = (i2.length > 3) ? i2.length % 3 : 0;



                res2.data.revenue = secondNegativeSign + (j2 ? i2.substr(0, j2) + thousands : '') + i2.substr(j2).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(secondAmount - i2).toFixed(decimalCount).slice(2) : "");















            }

            formatMoney(res2.data.budget, res2.data.revenue)
            return res2.data
        }





    };



    try {

        const teste = await getMovies()
        res.send(teste)

    } catch (err) {
        console.log(err);
    }












});
module.exports = router;
