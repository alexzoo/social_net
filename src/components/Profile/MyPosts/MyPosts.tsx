import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <div className='posts'>
                <Post message='How are you' likes={3}/>
                <Post message='React' likes={5}/>
            </div>
        </div>
    )
}

export default MyPosts;