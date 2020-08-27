import React, {useEffect} from 'react';
import { fetchPopular } from '../actions/action';
import axios from 'axios'

function LatestPopular(props){
  const title = props.data.title
  // Image Source
  const image = `https://image.tmdb.org/t/p/original/${props.data.backdrop_path}`
  return (
    //Card Section
    <div>
      <h1>{ title }</h1>
      <img src={ image } />
    </div>
  );
}

export default LatestPopular;