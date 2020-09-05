import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs, {DialogsElementsType, MessagesElementsType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostDataType} from "./components/Profile/MyPosts/MyPosts";

export type AppType = {
    posts: Array<PostDataType>
    dialogs: Array<DialogsElementsType>
    messages: Array<MessagesElementsType>
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
