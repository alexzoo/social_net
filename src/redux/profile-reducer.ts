import { ProfilePageType } from "./state"

enum ProfileActionTypes {
	ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
}


const profileReducer = (state: ProfilePageType, action: any): ProfilePageType => {
	switch (action.type){
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
		default: return state	
	}
}

export const addPostAC = () => ({type: ProfileActionTypes.ADD_POST})

export const updateNewPostTextAC = (text: string) => ({type: ProfileActionTypes.UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
