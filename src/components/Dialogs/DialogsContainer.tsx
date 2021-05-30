import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

function DialogsContainer(props: DialogsContainerPropsType) {

    const state = props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (message: string) => {
        props.store.dispatch(updateNewMessageTextAC(message))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state.dialogsPage}/>

}

export default DialogsContainer