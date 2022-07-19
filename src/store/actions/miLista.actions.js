import { miListaTypes } from "../types/miLista.types";
import { insertItem, getMiLista } from "../../db";

const { GET_MI_LISTA, ADD_TO_MI_LISTA, REMOVE_FROM_MI_LISTA } = miListaTypes;

export const getMiListaFromAction = () => {
    return async (dispatch) => {
        try {
            const result = await getMiLista();
            const data = (result.rows._array).map(obj => obj.item)
            dataParse = data.map(obj => JSON.parse(obj))
            
            dispatch({
                type: GET_MI_LISTA,
                lista: dataParse
            })
        } catch (error) {
            throw error;
        }
    }
}