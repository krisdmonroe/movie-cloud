import {
    FETCHING_POPULAR_START,
    FETCHING_POPULAR_SUCCESS,
    FETCHING_POPULAR_FAILURE
  } from '../actions/action';
  
export const initialState = {
    popular: null,
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
        default:
            return state;
    }
}