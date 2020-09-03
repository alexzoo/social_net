import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number
    name: string
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

// type MessageDataType = {
//     id: number
//     message: string
// }
//
// type DialogsDataType = {
//     id: number
//     name: string
// }

function Message(props: MessageType) {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

function Dialogs() {

    let dialogs: Array<{ name: string; id: number }> = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Jora'},
        {id: 4, name: 'Konya'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messages: Array<{ id: number; message: string }> = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yooooooo!'},
        {id: 3, message: 'Viski!'},
        {id: 4, message: 'Igogo!'}
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)

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