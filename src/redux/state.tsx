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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (callback: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
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
    addPost() {
        const newPost: PostType = {
            id: Math.random(),
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewPost = ''
        this._onChange()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    subscribe(callback) {
        this._onChange = callback
    },
    _onChange() {
        console.log('State changed')
    },
    getState() {
        return this._state
    }
}

export default store