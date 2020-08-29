import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='fon'/>
        </div>
        <MyPosts/>
    </div>
}

export default Profile;