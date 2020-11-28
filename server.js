const express = require('express');
const path = require('path')




const app = express();
app.use(express.static(path.join(__dirname, 'app/build')));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    console.log(req);
}
);


app.get('/api/random-movie', require('./middleware/random-movie'));




app.use('/api/movies', require('./middleware/movies'));
app.use('/api/random-movie', require('./middleware/random-movie'));
app.use('/api/movie/details', require('./middleware/movie-details'));



let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));