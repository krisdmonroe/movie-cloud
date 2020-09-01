import axios from 'axios';

// Hiding Api Key
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const FETCHING_POPULAR_START = 'FETCHING_POPULAR_START';
export const FETCHING_POPULAR_SUCCESS = 'FETCHING_POPULAR_SUCCESS';
export const FETCHING_POPULAR_FAILURE = 'FETCHING_POPULAR_FAILURE';

export const FETCHING_GENRES_START = 'FETCHING_GENRES_START';
export const FETCHING_GENRES_SUCCESS = 'FETCHING_GENRES_SUCCESS';
export const FETCHING_GENRES_FAILURE = 'FETCHING_GENRES_FAILURE';

export const INCREASE_CURRENT_INDEX = 'INCREASE_CURRENT_INDEX';
export const DECREASE_CURRENT_INDEX = 'DECREASE_CURRENT_INDEX';
export const RESET_INDEX = 'RESET_INDEX'
export const END_OF_INDEX = 'END_OF_INDEX'

export const fetchPopular = () => dispatch => {
    dispatch({ type: FETCHING_POPULAR_START });
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res => {
        console.log('this is res', res)
        dispatch({ type:FETCHING_POPULAR_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
        dispatch({ type: FETCHING_POPULAR_FAILURE, payload: err.response})
    })
}

export const fetchGenres = () => dispatch => {
    dispatch({ type: FETCHING_GENRES_START })
    axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res => {
        console.log('this is res genres', res)
        dispatch({ type: FETCHING_GENRES_SUCCESS, payload: res.data.genres})
    })
    .catch(err => {
        dispatch({ type: FETCHING_GENRES_FAILURE, payload: err.response })
    })
}

export const increaseIndex = newIndex => {
    return { type: INCREASE_CURRENT_INDEX, payload: newIndex };
}

export const decreaseIndex = newIndex => {
    return { type: DECREASE_CURRENT_INDEX, payload: newIndex }
}

export const resetIndex = newIndex => {
    return { type: RESET_INDEX, payload: newIndex }
}

export const endOfIndex = newIndex => {
    return { type: END_OF_INDEX, payload: newIndex }
}
