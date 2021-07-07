import { createStore, combineReducers } from 'redux'
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    userPage: userReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export type AppStoreType = typeof store

export default store
