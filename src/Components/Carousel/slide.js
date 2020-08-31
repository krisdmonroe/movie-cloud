import React, { useState } from 'react';
import { connect } from 'react-redux'

import '../css/main.css'

function Slide(props) {
console.log('this is slide props', props)

const popular = props.popular
const popularMap = popular.map((popular, index) => {
    return(
      <div className={
        index === props.activeIndex ? 'active' : 'slide'}
        key={index}>
        <div>
        <img className='image' src={`https://image.tmdb.org/t/p/original/${popular.backdrop_path}`}/>
        <h1><span><br/>{popular.title}</span></h1>
        </div>
        </div>
    )
  })
  return (
    <section>
        { popularMap }
    </section>
  );
}
const MapStateToProps = (state) => {
    return {
        activeIndex: state.activeIndex,
        length: state.popular.length,
        popular: state.popular
    }
}

export default connect(MapStateToProps,{})(Slide);
