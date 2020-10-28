import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = () => {
    ReactDOM.render(<App
        store={store}
        // addPost={store.addPost}
        // updateNewPostText={store.updateNewPostText}
        // messageForNewPost={store._state.profilePage.messageForNewPost}
    />, document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)