import React from 'react';
import css from './Post.module.css';

type PostPropsType = {
    message: string
    likes: number
}

function Post(props: PostPropsType) {
    return (
        <div className={css.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' alt='ava'/>
            {props.message}
            <div>likes {props.likes}</div>
        </div>
    )
}

export default Post;