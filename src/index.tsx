import state, {addPost, RootStateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = () => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        messageForNewPost={state.profilePage.messageForNewPost}
    />, document.getElementById('root'));
}

rerenderEntireTree()

subscribe(rerenderEntireTree)