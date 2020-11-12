import React, {ChangeEvent} from 'react';
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import {PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../storeContext";

type MyPostsPropsType = {
    // myPosts: Array<PostType>
    // dispatch: (action: ActionTypes) => void
    // messageForNewPost: string
    // addPostAC: () => ActionTypes
    // updateNewPostTextAC: (text: string) => any
    // store: StoreType
}

function MyPostsContainer(props: MyPostsPropsType) {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const addPostCallback = () => {
                        store.dispatch(addPostAC())
                    }

                    const onPostChangeCallback = (e: string) => {
                        store.dispatch(updateNewPostTextAC(e))
                    }
                    return <MyPosts addPostAC={addPostCallback} updateNewPostTextAC={onPostChangeCallback}
                                    posts={state.profilePage.posts}
                                    messageForNewPost={state.profilePage.messageForNewPost}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
