import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {DialogPageType} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from 'redux'


export type MapStateToPropsType = {
    dialogsPage: DialogPageType
}

export type MapDispatchToPropsType = {
    updateNewMessageBody(message: string): void
    sendMessage(): void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(updateNewMessageTextAC(message))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer