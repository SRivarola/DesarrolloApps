import { movieTypes } from '../types/movie.types';

const { GET_MOVIES, GET_BIU, SELECT_MOVIE, GET_CAST, GET_VIDEO } = movieTypes;

const initialState = {
    movies: [],
    baseImageUrl: '',
    portada: {},
    selected: {},
    cast: [],
    video: '',
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.movies,
                selected: action.selected,
                portada: action.portada
            }
        case GET_BIU:
            return {
                ...state,
                baseImageUrl: action.baseImageUrl
            }
        case SELECT_MOVIE:
            return {
                ...state,
                selected: action.selected,
                portada: action.portada
            }
        case GET_CAST:
            return {
                ...state,
                cast: action.cast,
            }
        case GET_VIDEO:
            return {
                ...state,
                video: action.video,
            }
        default:
            return state;
    }
}

export default movieReducer;