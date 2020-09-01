import React from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightArrow(props){
    return (
        <div className='rightArrow' onClick={props.goToNextSlide}>
             <FontAwesomeIcon icon={faChevronRight} />
        </div>
    )
}

export default RightArrow;