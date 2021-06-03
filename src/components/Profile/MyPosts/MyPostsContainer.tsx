import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

type MyPostsContainerPropsType = {
    store: StoreType
    children: any
}

function MyPostsContainer() {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                messageForNewPost={state.profilePage.messageForNewPost}/>
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
