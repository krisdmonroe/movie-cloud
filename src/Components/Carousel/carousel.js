import React, {useState}from 'react';
import { connect } from 'react-redux'

import LeftArrow from './leftArrow'
import RightArrow from './rightArrow'
import Slide from './slide'
import '../css/main.css'
import { increaseIndex, decreaseIndex, resetIndex, endOfIndex } from '../actions/action';

function Carousel(props){
console.log('this is carousel props', props)

let goToPrevSlide = () =>{
    let index = props.activeIndex;
    let length = props.length;
    if(index < 1) {
        props.end()
    }
    else {
        props.decrement()
    }
}
let goToNextSlide = () => {
    let index = props.activeIndex;
    let length = props.length;
    if(index+1 === length){
        props.reset()
    }
    else {
        props.increment()
    }
}
    return (
        <div className='slider'>
            <div className='sliderItems'>
            <LeftArrow goToPrevSlide={goToPrevSlide}/>
            <div className='slider-text'>
            <Slide />
            </div>
            <RightArrow goToNextSlide={goToNextSlide}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('this is state in cara', state)
    return {
        activeIndex: state.activeIndex,
        length: state.popular.length
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch(increaseIndex()),
       decrement: () => dispatch(decreaseIndex()),
       reset: () => dispatch(resetIndex()),
       end: () => dispatch(endOfIndex()),
    };
 };

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);