import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    // state: DialogPageType
    store: StoreType
}

function DialogsContainer(props: DialogsPropsType) {

    const state = props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (message: string) => {
        // let message = e.currentTarget.value
        props.store.dispatch(updateNewMessageTextAC(message))
    }

    return (<Dialogs updateNewMessageTextAC={onNewMessageChange} sendMessageAC={onSendMessageClick}
        dialogsPage={state.dialogsPage}/> )
}

export default DialogsContainer