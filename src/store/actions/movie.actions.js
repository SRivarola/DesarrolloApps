import { movieTypes } from "../types/movie.types";
import { baseUrl, apiUrl, apiKey } from '../../constants/dataApi'
import axios from 'axios';

const { GET_MOVIES , GET_BIU, SELECT_MOVIE, GET_CAST, GET_VIDEO } = movieTypes;

export const getMovies = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${baseUrl}${apiUrl}${apiKey}&language=es=ES`);
            const portadaId = response.data.results[0].id
            const portada = await axios.get(`${baseUrl}movie/${portadaId}?api_key=${apiKey}`)
            const datos = await axios.get(`${baseUrl}movie/${portadaId}?api_key=${apiKey}&language=es-ES`)
            dispatch({
                type: GET_MOVIES,
                movies: response.data.results,
                portada: portada.data,
                selected: datos.data
            })
        } catch(err) {
            console.log(err.message)
        }
    }
}

export const getBaseImgUrl = () => {
    return async dispatch => {
        try{
            const response = await axios.get(`${baseUrl}configuration?api_key=${apiKey}&language=es-ES`)
            
            dispatch({
                type: GET_BIU,
                baseImageUrl: response.data.images.secure_base_url
            })
        } catch(err) {
            console.log(err.message)
        }
    }
}

export const selectMovie = (id) => {
    return async dispatch => {
        try {
            const portada = await axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`)
            const selected = await axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}&language=es-ES`)
          
            dispatch({
                type: SELECT_MOVIE,
                portada: portada.data,
                selected: selected.data
            })
        } catch(err) {
            console.log(err.message)
        }
    }
}

export const getCast = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${baseUrl}movie/${id}/credits?api_key=${apiKey}&language=es-ES`);
            
            dispatch({
                type: GET_CAST,
                cast: response.data.cast,
            })
        } catch(err) {
            console.log(err.message)
        }
    }
}

export const getVideo = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${baseUrl}movie/${id}/videos?api_key=${apiKey}`);
         
            dispatch({
                type: GET_VIDEO,
                video: response.data.results[0] ? response.data.results[0].key : null,
            })
        } catch(err) {
            console.log(err.message)
        }
    }
}