const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
	switch (action.type){
		case ADD_POST: 
			let newPost = {
				id: Math.random(),
				message: state.messageForNewPost,
				likesCount: 0
			}
			state.posts.push(newPost)
			state.messageForNewPost = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.messageForNewPost = action.newText
			return state
		default: return state	
	}
}

export const addPostAC = () => ({type: ADD_POST})

export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
