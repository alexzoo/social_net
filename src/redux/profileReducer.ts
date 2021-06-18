import {v1} from "uuid";

enum ProfileActionTypes {
    ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const initialState = {
    messageForNewPost: 'it-kamasutra',
    posts: [
        {id: 1, message: 'How are you', likesCount: 3},
        {id: 2, message: 'I\'m fine bro!', likesCount: 5},
        {id: 3, message: 'Trololo', likesCount: 15}
    ] as Array<PostType>
}

export type ProfilePageType = typeof initialState

const profileReducer = (state: ProfilePageType = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ProfileActionTypes.ADD_POST:
            let newPost = {
                id: +v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }

        case ProfileActionTypes.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }

        default:
            return state
    }
}

export const addPostAC = () => ({type: ProfileActionTypes.ADD_POST})

export const updateNewPostTextAC = (text: string) => ({type: ProfileActionTypes.UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
