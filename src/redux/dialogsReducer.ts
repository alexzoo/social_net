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

// export type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageText: string
// }

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

const dialogsReducer = (state:DialogPageType = initialState, action: any): DialogPageType => {
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
