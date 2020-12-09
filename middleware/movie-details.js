const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();



router.post('/', async (req, res) => {
    const { movie, lang } = req.body;

    const { id } = movie;
    const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
    if (lang === 'eng') {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
                `)


        function formatMoney(amount, secondAmount, decimalCount = 2, decimal = ".", thousands = ",") {


            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;



            movie.data.budget = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");


            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const secondNegativeSign = secondAmount < 0 ? "-" : "";

            let i2 = parseInt(secondAmount = Math.abs(Number(secondAmount) || 0).toFixed(decimalCount)).toString();
            let j2 = (i2.length > 3) ? i2.length % 3 : 0;



            movie.data.revenue = secondNegativeSign + (j2 ? i2.substr(0, j2) + thousands : '') + i2.substr(j2).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(secondAmount - i2).toFixed(decimalCount).slice(2) : "");



            const year = movie.data.release_date.slice(0, 4)

            const month = movie.data.release_date.slice(5, 7)
            const day = movie.data.release_date.slice(8, 11)
            movie.data.release_date = `${day}/${month}/${year}`




        }

        formatMoney(movie.data.budget, movie.data.revenue)






        res.send(JSON.stringify(movie.data));
    } else {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR
        `)


        function formatMoney(amount, secondAmount, decimalCount = 2, decimal = ".", thousands = ",") {


            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const negativeSign = amount < 0 ? "-" : "";

            let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
            let j = (i.length > 3) ? i.length % 3 : 0;



            movie.data.budget = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");


            decimalCount = Math.abs(decimalCount);
            decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

            const secondNegativeSign = secondAmount < 0 ? "-" : "";

            let i2 = parseInt(secondAmount = Math.abs(Number(secondAmount) || 0).toFixed(decimalCount)).toString();
            let j2 = (i2.length > 3) ? i2.length % 3 : 0;



            movie.data.revenue = secondNegativeSign + (j2 ? i2.substr(0, j2) + thousands : '') + i2.substr(j2).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(secondAmount - i2).toFixed(decimalCount).slice(2) : "");



            const year = movie.data.release_date.slice(0, 4)

            const month = movie.data.release_date.slice(5, 7)
            const day = movie.data.release_date.slice(8, 11)
            movie.data.release_date = `${day}/${month}/${year}`




        }


        formatMoney(movie.data.budget, movie.data.revenue)





        res.send(JSON.stringify(movie.data));
    }


});

module.exports = router;
