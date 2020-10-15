import {renderEntireTree} from "../render";


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
    // newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        messageForNewPost: 'it-kamasutra',
        posts:  [
            {id: 1, message: 'How are you', likesCount: 3},
            {id: 2, message: 'I\'m fine bro!', likesCount: 5},
            {id: 3, message: 'Trololo', likesCount: 15}
        ],
        // newPostText: 'it-kamasutra',

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Jora'},
            {id: 4, name: 'Konya'}
        ],
        messages:  [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Yooooooo!'},
            {id: 3, message: 'Viski!'},
            {id: 4, message: 'Igogo!'}
        ]
    },
    sidebar: {}
}

export const addPost = () => {

    const newPost: PostType = {
        id: Math.random(),
        message: state.profilePage.messageForNewPost,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.messageForNewPost = ''
    renderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderEntireTree(state)
}

export default state