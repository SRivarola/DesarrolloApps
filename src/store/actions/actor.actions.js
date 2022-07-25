import { actorTypes } from "../types/actor.types";
import axios from 'axios';
import { baseUrl, apiKey } from '../../constants/dataApi'; 

const { GET_ACTOR } = actorTypes;

export const getActor = (id) => {
    return async dispatch => {
        try {
            const responseActor = await axios.get(`${baseUrl}person/${id}?api_key=${apiKey}&language=es-ES`);
            const responseCredits = await axios.get(`${baseUrl}person/${id}/combined_credits?api_key=${apiKey}&language=es-ES`);
            
            dispatch({
                type: GET_ACTOR,
                actor: responseActor.data,
                credits: responseCredits.data.cast,
            })
        } catch(err) {
            console.log(err.message)
        }
    }
}