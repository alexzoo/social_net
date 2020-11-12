import React from "react";
import {StoreType} from "./redux/store";
import { Store } from "redux";


export const StoreContext = React.createContext({} as Store)


export type ProviderType = {
    store: Store
    children: any
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}