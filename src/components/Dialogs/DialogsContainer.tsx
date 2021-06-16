import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
    store: StoreType
    children: any
}

function DialogsContainer() {

    return <StoreContext.Consumer>{
        (store) => {
            const state = store.getState()

            const onSendMessageClick = () => {
                store.dispatch(sendMessageAC())
            }

            const onNewMessageChange = (message: string) => {
                store.dispatch(updateNewMessageTextAC(message))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state.dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer