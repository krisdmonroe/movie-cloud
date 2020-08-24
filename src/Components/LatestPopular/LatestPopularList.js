import React, { useEffect } from 'react';
import LatestPopular from './LatestPopular'
import { fetchPopular } from '../actions/action'
import { connect } from 'react-redux'

function LatestPopularList(props) {
  console.log('this is list props', props)
  const popular = props.popular;
  return (
    <div>
    {popular.map(popular => {
      return(
        <LatestPopular
        key={popular.toString()}
        data={popular}/>
      )
      })
    }
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
    popular: state.popular
  }
}
export default connect(mapStateToProps,{})(LatestPopularList);
