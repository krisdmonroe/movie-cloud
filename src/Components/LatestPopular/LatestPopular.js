import React, {useEffect} from 'react';
import { fetchPopular } from '../actions/action';

function LatestPopular(props){
  console.log('this is props', props.data)
  return (
    <div>
      <h1>{props.data.title}</h1>
    </div>
  );
}

export default LatestPopular;