import css from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    id: number
    name: string
}

export function DialogItem(props: DialogItemType) {
    let path = '/dialogs/' + props.id

    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}