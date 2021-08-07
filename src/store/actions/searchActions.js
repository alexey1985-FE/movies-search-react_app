import {LOADING, SET_MOVIE, SET_MOVIES} from './types';
import {axios} from "../../config/axios";
import {getDefaultMovies} from "../../api";


export const setLoading = () => {
    return {
        type: LOADING,
    };
};


export const fetchMovies = query => async dispatch => {
    try {
        dispatch(setLoading())

        const {data} = await axios.get(query);

        dispatch({
            type: SET_MOVIES,
            payload: data,
        })
    } catch (e) {
        console.log(e);
    }
};

export const fetchMovie = id => dispatch => {
    axios
        .get(`&i=${id}`)
        .then(response =>
            dispatch({
                type: SET_MOVIE,
                payload: response.data,
            })
        )
        .catch(err => console.log(err));
};

export const fetchDefaultMovies = (page = 1) => async dispatch => {
    dispatch(setLoading())

    const data = await getDefaultMovies(page)

    dispatch({
        type: SET_MOVIES,
        payload: data,
    })
}
