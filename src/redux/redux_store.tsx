import {createStore, combineReducers} from 'redux'
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

export type ReducersType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers)
