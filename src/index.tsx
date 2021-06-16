import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "./StoreContext";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/reduxStore";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)