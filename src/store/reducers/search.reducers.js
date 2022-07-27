import { searchTypes } from "../types/search.types";

const { GET_SEARCH } = searchTypes;

const initialState = {
    searchList: [],
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                searchList: action.searchList,
            }
        default:
            return state;
    }
}

export default searchReducer;