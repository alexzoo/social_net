import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogsReducer";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

type ActionTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'it-kamasutra',
            posts: [
                {id: 1, message: 'How are you', likesCount: 3},
                {id: 2, message: 'I\'m fine bro!', likesCount: 5},
                {id: 3, message: 'Trololo', likesCount: 15}
            ],

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Jora'},
                {id: 4, name: 'Konya'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Yooooooo!'},
                {id: 3, message: 'Viski!'},
                {id: 4, message: 'Igogo!'}
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
    dispatch(action: ActionTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

