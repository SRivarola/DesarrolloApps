import { userTypes } from "../types/user.types";
import * as FileSystem from "expo-file-system";

const { USER_NAME, USER_IMAGE } = userTypes;

export const setUserName = (text) => ({
    type: USER_NAME,
    text: text,
})

export const setUserImage = (imgUri) => {
    return async dispatch => {
        const fileName = imgUri.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: imgUri,
                to: Path,
            })
        } catch (error) {
            console.log(error.message)
            throw error
        }

        dispatch({ 
            type: USER_IMAGE,
            imgUri: Path
        })
    }
}