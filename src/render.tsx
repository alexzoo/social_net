import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./redux/state";

type renderEntireTreeType = {
    state: RootStateType
}

export const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));
}

