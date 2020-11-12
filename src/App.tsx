import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/store";
import {store} from "./redux/redux_store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    // store: typeof store
    // store: any
}

function App(props: AppPropsType) {

    // const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
