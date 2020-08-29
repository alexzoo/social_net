import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemType) {
    let path = '/dialogs/' + props.id

    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

function Message(props: MessageType) {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

function Dialogs() {
    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogs_items}>
                    <DialogItem name='Alex' id={1}/>
                    <DialogItem name='Sveta' id={2}/>
                    <DialogItem name='Jora' id={3}/>
                </div>
                <div className={css.messages}>
                    <Message message='Hi'/>
                    <Message message='Yoo'/>
                    <Message message='Bye'/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs