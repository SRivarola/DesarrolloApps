import { miListaTypes } from "../types/miLista.types";
import { useSelector } from 'react-redux';
import { insertItem, getItems, deleteItem } from "../../db";

const { GET_MI_LISTA, ADD_TO_MI_LISTA, REMOVE_FROM_MI_LISTA } = miListaTypes;

export const getMiLista = () => {
    return async (dispatch) => {
        try {
            const result = await getItems();
            const array = [];
            for (let i = 0; i < result.rows._array.length; i++) {
                const element = result.rows._array[i];
                let objeto = {idDB: element.id, ...JSON.parse(element.item)}
                array.push(objeto)
            }
            
            dispatch({
                type: GET_MI_LISTA,
                lista: array
            })
        } catch (error) {
            throw error;
        }
    }
}

export const addToMiLista = (item) => {
    return async (dispatch) => {
        try {
            const res = await insertItem(item);
            dispatch({
                type: ADD_TO_MI_LISTA,
                lista: {...item, idDB: res.insertId}
            })
        } catch (error) {
            throw error;
        }
    }
}

export const deleteFromMiList = (id) => {
    return async (dispatch) => {
        try {
            await deleteItem(id);
            const result = await getItems();
            const array = [];
            for (let i = 0; i < result.rows._array.length; i++) {
                const element = result.rows._array[i];
                let objeto = {idDB: element.id, ...JSON.parse(element.item)}
                array.push(objeto)
            }
            
            dispatch({
                type: REMOVE_FROM_MI_LISTA,
                lista: array
            })
        } catch (error) {
            throw error;
        }
    }
}