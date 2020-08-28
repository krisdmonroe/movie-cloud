import {
    FETCHING_POPULAR_START,
    FETCHING_POPULAR_SUCCESS,
    FETCHING_POPULAR_FAILURE,
    SET_CURRENT_INDEX,
  } from '../actions/action';
  
export const initialState = {
    activeIndex: 0,
    popular: [],
    error: ''
  };
  

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_POPULAR_START: 
        return {
            ...state
        }
        case FETCHING_POPULAR_SUCCESS:
            return {
                ...state,
                popular: action.payload
            }
        // case SET_CURRENT_INDEX:
        //     return {
        //         ...state,
        //         activeIndex: action.payload
        //     }
        default:
            return state;
    }
}