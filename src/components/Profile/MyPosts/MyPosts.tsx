import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

    let postsData = [
        {id: 1, message: 'How are you', likes: 3},
        {id: 2, message: 'I\'m fine bro!', likes: 5}
    ]

    return (
        <div className={css.posts_wrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                <Post message={postsData[0].message} likes={postsData[0].likes}/>
                <Post message={postsData[1].message} likes={postsData[1].likes}/>
            </div>
        </div>
    )
}

export default MyPosts;