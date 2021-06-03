import React, {createContext} from "react";
import {StoreType} from "./redux/store";

const StoreContext = createContext({} as StoreType)

type ProviderType = {
    store: StoreType
    children: any
}
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContext