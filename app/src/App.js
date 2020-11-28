import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './client/layout/pages/Home'
import About from './client/layout/pages/About'
import MovieList from './client/layout/pages/MovieList'
import MoviePage from './client/layout/pages/MoviePage'
import MovieDetails from './client/layout/pages/MovieDetails'
import Alerts from './client/layout/components/Alerts'
import Navbar from './client/layout/components/Navbar/navbar';
import Footer from './client/layout/components/footer'
import MovieState from './client/layout/context/movieContext/MovieState'
import MovieItemState from './client/layout/context/movieItemContext/MovieItemState'
import AlertState from './client/layout/context/alert/AlertState'

import './css/main.css';
const App = () => {

  return (
    <MovieItemState>
      <MovieState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <Footer />

              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/movielist' component={MovieList} />
                <Route exact path='/moviepage' component={MoviePage} />
                <Route exact path='/moviedetails' component={MovieDetails} />
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
      </MovieState>
    </MovieItemState>
  );
}

export default App;
