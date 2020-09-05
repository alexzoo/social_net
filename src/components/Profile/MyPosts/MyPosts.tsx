import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export type MyPostType = {
    posts: Array<PostDataType>
}

function MyPosts(props: MyPostType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

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