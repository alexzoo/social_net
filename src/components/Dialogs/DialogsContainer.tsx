import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs_reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../storeContext";

type DialogsPropsType = {
    // state: DialogPageType
    // store: StoreType
}

function DialogsContainer(props: DialogsPropsType) {

    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState()

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }

                const onNewMessageChange = (message: string) => {
                    // let message = e.currentTarget.value
                    store.dispatch(updateNewMessageTextAC(message))
                }
                return <Dialogs updateNewMessageTextAC={onNewMessageChange} sendMessageAC={onSendMessageClick}
                                dialogsPage={state.dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer