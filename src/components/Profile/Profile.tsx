import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
    messageForNewPost: string
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPosts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     messageForNewPost={props.profilePage.messageForNewPost}
            />
        </div>
    )
}

export default Profile;