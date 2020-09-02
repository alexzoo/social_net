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

function Message(props: MessageType) {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sveta'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Yooooooo!'}
    ]

    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogs_items}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                </div>
                <div className={css.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs