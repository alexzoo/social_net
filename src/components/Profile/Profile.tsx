import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StoreType} from "../../redux/store";
import {ActionTypes} from "../../redux/profile_reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionTypes) => void
    // messageForNewPost: string
    store: StoreType
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}

export default Profile;