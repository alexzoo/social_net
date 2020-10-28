import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // messageForNewPost: string
}

function App(props: AppPropsType) {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        messageForNewPost={state.profilePage.messageForNewPost}
                        addPost={props.store.addPost.bind(props.store)}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
