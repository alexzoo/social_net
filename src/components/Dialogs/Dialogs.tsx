import React, {ChangeEvent} from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import {StoreType} from "../../redux/state";

type DialogsPropsType = {
    // state: DialogPageType
    store: StoreType
}

function Dialogs(props: DialogsPropsType) {

    const state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    let newMessageText = state.newMessageText

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value
        props.store.dispatch(updateNewMessageTextAC(message))
    }

    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={css.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea value={newMessageText}
                              onChange={onNewMessageChange}
                              placeholder="Enter message"></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs