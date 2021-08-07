import {LOADING, SET_MOVIE, SET_MOVIES} from '../actions/types';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: [],
};

export const movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case SET_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
