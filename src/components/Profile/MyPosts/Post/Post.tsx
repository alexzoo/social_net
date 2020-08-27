import React from 'react';
import css from './Post.module.css';

type PostsType = {
    message: string
    likes: number
}

function Post(props: PostsType) {
    return (
        <div className={css.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'/>
            {props.message}
            <div>likes {props.likes}</div>
        </div>
    )
}

export default Post;