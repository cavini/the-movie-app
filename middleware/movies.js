const express = require('express');
const axios = require('axios');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();





router.post('/', async (req, res) => {

    const { with_genres, sort_by, certification } = req.body;




    try {
        const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY

        const movies = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&certification_country=BR&certification=${certification}&sort_by=${sort_by}&with_genres=${with_genres}`)


        res.send(movies.data);
    } catch (err) {
        console.log(err);
    }


});

module.exports = router;