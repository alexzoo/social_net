import {DialogPageType} from "./state"

enum DialogActionTypes {
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
    SEND_MESSAGE = 'SEND_MESSAGE'
}

const dialogsReducer = (state: DialogPageType, action: any): DialogPageType => {
    switch (action.type) {
        case DialogActionTypes.UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        case DialogActionTypes.SEND_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: newMessage})
            return state
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
