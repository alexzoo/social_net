import React, {ChangeEvent} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../redux/profile_reducer";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    // myPosts: Array<PostType>
    // dispatch: (action: ActionTypes) => void
    // messageForNewPost: string
    addPostAC: () => void
    updateNewPostTextAC: (text: string) => any
    posts: Array<PostType>
    messageForNewPost: string

}

function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
        props.addPostAC()
    }

    const onPostChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextAC(e.currentTarget.value)
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
