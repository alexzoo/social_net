import React from "react";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsPropsType = {
    // state: DialogPageType
    // store: StoreType
}

const mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessageAC: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageTextAC: (message: any) => {
            dispatch(updateNewMessageTextAC(message))
        }
    }
}

// @ts-ignore
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer