import { searchTypes } from "../types/search.types";
import { baseUrl, apiKey } from "../../constants/dataApi";
import axios from 'axios';

const { GET_SEARCH } = searchTypes;

export const getSearch = (query) => {
    return async dispatch => {
        try {
            const response = await axios.get(`${baseUrl}search/movie?api_key=${apiKey}&query=${query}`)
          
            dispatch({
                type: GET_SEARCH,
                searchList: response.data.results
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}