import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";


export const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        messageForNewPost={state.profilePage.messageForNewPost}
    />, document.getElementById('root'));
}
