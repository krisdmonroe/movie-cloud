import {
    FETCHING_POPULAR_START,
    FETCHING_POPULAR_SUCCESS,
    FETCHING_POPULAR_FAILURE,
    INCREASE_CURRENT_INDEX,
    DECREASE_CURRENT_INDEX,
    RESET_INDEX,
    FETCHING_GENRES_START,
    FETCHING_GENRES_SUCCESS,
    END_OF_INDEX,
  } from '../actions/action';
  
export const initialState = {
    activeIndex: 0,
    popular: [],
    genres: [],
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
        case FETCHING_GENRES_SUCCESS:
            return {
                ...state,
                genres: action.payload
            }
        case INCREASE_CURRENT_INDEX:
            return {
                ...state,
                activeIndex: state.activeIndex + 1
            }
        case DECREASE_CURRENT_INDEX:
            return {
                ...state,
                activeIndex: state.activeIndex -1
            }
        case RESET_INDEX:
            return {
                ...state,
                activeIndex: 0
            }
        case END_OF_INDEX: {
            return {
                ...state,
                activeIndex: state.popular.length -1
            }
        }
        default:
            return state;
    }
}