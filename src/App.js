import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import latestPopular from './Components/LatestPopular/LatestPopular'
import { Reducer } from './Components/reducers/reducer'
import { fetchPopular, fetchGenres } from './Components/actions/action';
import LatestPopularList from './Components/LatestPopular/LatestPopularList';
import Navigation from './Components/navigation';
import Carousel from './Components/Carousel/carousel';

function App(props) {
  useEffect(()=> {
    fetchPopular();
    fetchGenres();
  },[])

  const {
    fetchPopular,
    fetchGenres
  } = props

  return (
    <>
      <Navigation/>
      <div className="App">
      <Carousel />
      </div>
    </>
  );
}

export const store = createStore(Reducer, applyMiddleware(thunk, logger));

const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    error: state.error
  }
}
export default connect(mapStateToProps,{
  fetchPopular,
  fetchGenres,
})(App);
