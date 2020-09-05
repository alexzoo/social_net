import React from "react";
import css from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

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