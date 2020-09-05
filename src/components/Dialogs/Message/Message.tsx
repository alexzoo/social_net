import css from './Message.module.css';
import React from "react";

type MessageType = {
    message: string
}

export function Message(props: MessageType) {
    return (
        <div className={css.message}>{props.message}</div>
    )
}