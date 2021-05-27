import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = () => {
    ReactDOM.render(<App
        store={store}
    />, document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)