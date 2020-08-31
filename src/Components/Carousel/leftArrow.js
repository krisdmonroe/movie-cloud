import React from 'react';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LeftArrow(props) {
    console.log('left arrow props', props)
  return (
    <div className="leftArrow" onClick={props.goToPrevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

export default LeftArrow;
