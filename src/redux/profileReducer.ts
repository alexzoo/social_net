import {ProfilePageType} from "./store"

enum ProfileActionTypes {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
}

const initialState: ProfilePageType = {
    messageForNewPost: 'it-kamasutra',
    posts: [
        {id: 1, message: 'How are you', likesCount: 3},
        {id: 2, message: 'I\'m fine bro!', likesCount: 5},
        {id: 3, message: 'Trololo', likesCount: 15}
    ]
}

const profileReducer = (state = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ProfileActionTypes.ADD_POST:
            let newPost = {
                id: Math.random(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPost = ''
            return state
        case ProfileActionTypes.UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ProfileActionTypes.ADD_POST})

export const updateNewPostTextAC = (text: string) => ({type: ProfileActionTypes.UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer