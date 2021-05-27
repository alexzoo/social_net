import { createStore, combineReducers } from 'redux'
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import {StoreType} from "./store";

const rootReducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

const store: StoreType = createStore(rootReducers)

export default store
