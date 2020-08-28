import React, {useState}from 'react';
import { connect } from 'react-redux'

import LeftArrow from './leftArrow'
import RightArrow from './rightArrow'
import Slide from './slide'
import '../css/main.css'

function Carousel(props){
console.log('this is carousel props', props)
const [ index, setIndex ] = useState(props.activeIndex)
const [ length, setLength ] = useState(props.length)
const goToPrevSlide=()=>{
    let index = index;
    let length = length;
    if(index < 1) {
        index = length -1;
        }
        else {
            index--;
        }
    setIndex(index)
}
const goToNextSlide = () => {
    let index = index;
    let length = length
    if(index === length -1){
        index = 0
    }
    else {
        index++;
    }
    setIndex(index)
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

const MapStateToProps = (state) => {
    return {
        activeIndex: 0,
        length: state.popular.length
    }
}
export default connect(MapStateToProps, {})(Carousel);