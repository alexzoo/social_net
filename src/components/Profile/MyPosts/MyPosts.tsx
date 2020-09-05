import React from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.myPosts.map(p => <Post message={p.message} likes={p.likesCount}/>)

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