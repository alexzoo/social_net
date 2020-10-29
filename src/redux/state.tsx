const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
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

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    } as const
}

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
            ]
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
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: Math.random(),
                message: this._state.profilePage.messageForNewPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        }
    }
}

export default store