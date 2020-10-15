import React, {ChangeEvent} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.myPosts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPostCallback = () => {
        if(newPostElement.current){
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }

    let onPostChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // if (newPostElement.current) {
        //     props.updateNewPostText(newPostElement.current.value)
        // }
        props.updateNewPostText(e.currentTarget.value)
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
