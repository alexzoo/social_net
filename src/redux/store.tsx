import profileReducer, {ActionTypes} from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import {v1} from "uuid";

type MessageType = {
    id: string
    message: string
}
type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'it-kamasutra',
            posts: [
                {id: v1(), message: 'How are you', likesCount: 3},
                {id: v1(), message: 'I\'m fine bro!', likesCount: 5},
                {id: v1(), message: 'Trololo', likesCount: 15}
            ],

        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber()
    }
}

export default store