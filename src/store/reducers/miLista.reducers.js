import { miListaTypes } from "../types/miLista.types";

const { GET_MI_LISTA, ADD_TO_MI_LISTA, REMOVE_FROM_MI_LISTA } = miListaTypes;

const initialState = {
    lista: [],
}

const miListaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MI_LISTA:
            return {
                ...state,
                lista: action.lista,
            }
        default:
            return state;
    }
}

export default miListaReducer;