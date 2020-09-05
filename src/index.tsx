import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {PostDataType} from "./components/Profile/MyPosts/MyPosts";
import {DialogsElementsType, MessagesElementsType} from "./components/Dialogs/Dialogs";

let posts: Array<PostDataType> = [
    {id: 1, message: 'How are you', likesCount: 3},
    {id: 2, message: 'I\'m fine bro!', likesCount: 5},
    {id: 3, message: 'Trololo', likesCount: 15}
]

let dialogs: Array<DialogsElementsType> = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Jora'},
    {id: 4, name: 'Konya'}
]

let messages: Array<MessagesElementsType> = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Yooooooo!'},
    {id: 3, message: 'Viski!'},
    {id: 4, message: 'Igogo!'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
