import { userTypes } from "../types/user.types";

const { USER_IMAGE, USER_NAME } = userTypes;

const initialState = {
    img: '',
    name: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_NAME:
            return {
                ...state,
                name: action.text
            }
        case USER_IMAGE:
            return {
                ...state,
                img: action.imgUri
            }
        default:
            return state;
    }
}

export default userReducer;