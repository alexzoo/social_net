import React from 'react';
import MyPosts, {PostDataType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type ProfileType = {
    posts: Array<PostDataType>
}

function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;