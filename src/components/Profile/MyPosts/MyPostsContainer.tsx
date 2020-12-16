import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsPropsType = {
    // myPosts: Array<PostType>
    // dispatch: (action: ActionTypes) => void
    // messageForNewPost: string
    // addPostAC: () => ActionTypes
    // updateNewPostTextAC: (text: string) => any
    // store: StoreType
}

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPostAC: () => {
            dispatch(addPostAC())
        },
        updateNewPostTextAC: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
