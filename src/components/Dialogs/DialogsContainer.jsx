import React from "react";
import {sendNewMessageActionCreator, updateMessageActionCreator} from "../../Redux/reducer_dialogPage";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContex";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let dialogsElements = store.getState().dialogPage.dialogs

                let messagesElements = store.getState().dialogPage.messages

                let newMessageBody = store.getState().dialogPage.currentText

                let sendMessage = () => {
                    store.dispatch(sendNewMessageActionCreator())
                }
                let changeMessageText = (text) => {
                    store.dispatch(updateMessageActionCreator(text))
                }

                return (<Dialogs sendMessage={sendMessage}
                                 changeMessageText={changeMessageText}
                                 messages={messagesElements}
                                 dialogs={dialogsElements}
                                 currentText={newMessageBody}/>)
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;