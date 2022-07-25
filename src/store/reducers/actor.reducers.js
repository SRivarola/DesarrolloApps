import { actorTypes } from "../types/actor.types";

const { GET_ACTOR } = actorTypes;

const initialState = {
    actor: [],
    credits: [],
}

const actorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTOR:
            return {
                ...state,
                actor: action.actor,
                credits: action.credits,
            }
        default:
            return state;
    }
}

export default actorReducer;