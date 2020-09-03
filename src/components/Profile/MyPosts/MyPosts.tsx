import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

type PostDataType = {
    id: number
    message: string
}

function MyPosts() {

    let posts: Array<{id: number, message: string, likes: number}> = [
        {id: 1, message: 'How are you', likes: 3},
        {id: 2, message: 'I\'m fine bro!', likes: 5},
        {id: 3, message: 'Trololo', likes: 15}
    ]

    let postsElements = posts.map(p => <Post message={p.message} likes={p.likes}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;