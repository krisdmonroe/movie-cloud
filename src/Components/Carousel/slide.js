import React, { useState } from 'react';
import { connect } from 'react-redux'

function Slide(props) {
console.log('this is slide props', props)

const popular = props.popular
const popularMap = popular.map((popular, index) => {
    return(
      <div className={
        index === props.activeIndex ? 'active' : 'slide'}
        key={index}
        
        >
        <h1>{popular.title} </h1>
        {/* <img src={`https://image.tmdb.org/t/p/original/${popular.backdrop_path}`}/> */}
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
