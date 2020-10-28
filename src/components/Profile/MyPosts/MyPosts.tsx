import React, {ChangeEvent} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionTypes, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
    dispatch: (action: ActionTypes) => void
    messageForNewPost: string
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.myPosts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPostCallback = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
    }

    return (
        <div className={css.posts_wrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeCallback} ref={newPostElement} value={props.messageForNewPost}/>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
