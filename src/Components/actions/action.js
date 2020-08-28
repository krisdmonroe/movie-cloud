import axios from 'axios';

// Hiding Api Key
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const FETCHING_POPULAR_START = 'FETCHING_POPULAR_START';
export const FETCHING_POPULAR_SUCCESS = 'FETCHING_FACT_SUCCESS';
export const FETCHING_POPULAR_FAILURE = 'FETCHING_FACT_FAILURE';

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