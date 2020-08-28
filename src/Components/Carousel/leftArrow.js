import React from 'react';

function LeftArrow(props) {
    console.log('left arrow props', props)
  return (
    <div className="leftArrow" onClick={props.goToPrevSlide}>
        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
    </div>
  );
}

export default LeftArrow;
