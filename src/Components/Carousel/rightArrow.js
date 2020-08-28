import React from 'react';

function RightArrow(props){
    return (
        <div className='rightArrow' onClick={props.goToNextSlide}>
            <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
        </div>
    )
}

export default RightArrow;