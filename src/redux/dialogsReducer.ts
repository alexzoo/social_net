import {v1} from 'uuid'

enum DialogActionTypes {
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
    SEND_MESSAGE = 'SEND_MESSAGE'
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Jora'},
        {id: 4, name: 'Konya'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yooooooo!'},
        {id: 3, message: 'Viski!'},
        {id: 4, message: 'Igogo!'}
    ] as Array<MessageType>,
    newMessageText: ''
}

export type DialogPageType = typeof initialState

const dialogsReducer = (state: DialogPageType = initialState, action: any): DialogPageType => {
    switch (action.type) {
        case DialogActionTypes.UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }

        case DialogActionTypes.SEND_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: +v1(), message: newMessage}],
                newMessageText: ''
            }

        default:
            return state

    }
}

export const sendMessageAC = () => ({type: DialogActionTypes.SEND_MESSAGE})

export const updateNewMessageTextAC = (newMessage: string) => ({
    type: DialogActionTypes.UPDATE_NEW_MESSAGE_TEXT,
    newMessage: newMessage
})

export default dialogsReducer
