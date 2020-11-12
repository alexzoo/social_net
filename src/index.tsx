import {store} from "./redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider, StoreContext} from "./storeContext";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)