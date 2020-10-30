import {v1} from "uuid";
import {ActionTypes} from "./profile_reducer";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state: any, action: ActionTypes): any => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: v1(), message: newMessage})
            return state
        default:
            return state

    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage
    } as const
}

export default dialogsReducer