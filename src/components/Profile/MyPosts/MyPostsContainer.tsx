import React, {ChangeEvent} from 'react';
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import {PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    // myPosts: Array<PostType>
    // dispatch: (action: ActionTypes) => void
    // messageForNewPost: string
    // addPostAC: () => ActionTypes
    // updateNewPostTextAC: (text: string) => any
    store: StoreType
}

function MyPostsContainer(props: MyPostsPropsType) {

    const state = props.store.getState()

    const addPostCallback = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChangeCallback = (e: string) => {
        props.store.dispatch(updateNewPostTextAC(e))
    }

    return (<MyPosts addPostAC={addPostCallback} updateNewPostTextAC={onPostChangeCallback}
        posts={state.profilePage.posts} messageForNewPost={state.profilePage.messageForNewPost}/>)
}

export default MyPostsContainer;
