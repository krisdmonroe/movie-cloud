import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Reducer } from './Components/reducers/reducer'
import { fetchPopular } from './Components/actions/action';

function App(props) {
  useEffect(()=> {
    fetchPopular();
  },[])

  const {
    fetchPopular
  } = props

  return (
    <div className="App">
    </div>
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
})(App);
