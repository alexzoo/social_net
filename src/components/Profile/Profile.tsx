import React from 'react';
import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div className={css.content}>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <MyPosts/>
    </div>
}

export default Profile;