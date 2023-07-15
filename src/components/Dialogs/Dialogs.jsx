import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendNewMessageActionCreator, updateMessageActionCreator} from "../../Redux/state";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogs.map((d) => (<Dialog name={d.name} id={d.id}/>))

    let messagesElements = props.dialogPage.messages.map((m) => (<Message name={m.name}/>))

    let newMessageBody = props.dialogPage.currentText


    let sendMessage = () => {
        props.dispatch(sendNewMessageActionCreator())
    }
    let changeMessageText = (e) => {
        let text = e.target.value
        props.dispatch(updateMessageActionCreator(text))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.flex_colomn}>
                    <textarea placeholder={'enter your message..'} onChange={changeMessageText} value={newMessageBody}/>
                    <button onClick={sendMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs