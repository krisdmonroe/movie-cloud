import React, {useEffect} from 'react';
import { fetchPopular } from '../actions/action';
import axios from 'axios'

function LatestPopular(props){
  console.log('this is props', props.data)
  return (
    <div>
      <h1>{props.data.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${props.data.backdrop_path}` } />
    </div>
  );
}

export default LatestPopular;