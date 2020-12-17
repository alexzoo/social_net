import {v1} from "uuid";
import {ActionTypes} from "./profile_reducer";
import {DialogPageType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Jora'},
        {id: v1(), name: 'Konya'}
    ],
    messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'Yooooooo!'},
        {id: v1(), message: 'Viski!'},
        {id: v1(), message: 'Igogo!'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes): any => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        case SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: v1(), message: newMessage}]
            }
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