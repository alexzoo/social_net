import {PostType, ProfilePageType} from "./store";
import {v1} from "uuid";
import {sendMessageAC, updateNewMessageTextAC} from "./dialogs_reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ActionTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

const initialState = {
    messageForNewPost: 'it-kamasutra',
    posts: [
        {id: v1(), message: 'How are you', likesCount: 3},
        {id: v1(), message: 'I\'m fine bro!', likesCount: 5},
        {id: v1(), message: 'Trololo', likesCount: 15}
    ]
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): any => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.messageForNewPost = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }
}

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
export default profileReducer