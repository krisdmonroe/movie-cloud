import React, { useEffect } from 'react';
import LatestPopular from './LatestPopular'
import { fetchPopular } from '../actions/action'
import { connect } from 'react-redux'

function LatestPopularList(props) {
  console.log('this is list props', props)
  const popular = props.popular;
  //Maping popular
  const popularMap = popular.map(popular => {
    return(
      <LatestPopular
      key={popular.toString()}
      data={popular}/>
    )
  })
  //
  return (
    <div>
    { popularMap }
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    popular: state.popular
  }
}
export default connect(mapStateToProps,{})(LatestPopularList);
