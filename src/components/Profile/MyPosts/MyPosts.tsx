import React, {ChangeEvent} from 'react';
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPost, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    myPosts: Array<PostType>
    // posts: Array<PostType>
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.myPosts.map(p => <Post message={p.message} likes={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current){
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={css.posts_wrapper}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;