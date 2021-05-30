import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}

function MyPostsContainer(props: MyPostsContainerPropsType) {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 messageForNewPost={state.profilePage.messageForNewPost}/>
    )
}

export default MyPostsContainer;
