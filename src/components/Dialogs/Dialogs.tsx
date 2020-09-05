import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogsType = {
    dialogs: Array<DialogsElementsType>
    messages: Array<MessagesElementsType>
}

export type MessagesElementsType = {
    id: number
    message: string
}

export type DialogsElementsType = {
    id: number
    name: string
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={css.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs