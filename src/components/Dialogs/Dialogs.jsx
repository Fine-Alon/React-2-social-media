import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((d) => (<Dialog key={d.id} name={d.name} id={d.id}/>))

    let messagesElements = props.messages.map((m) => (<Message key={m.id} name={m.name}/>))

    let newMessageBody = props.currentText

    let sendMessage = () => {
        props.sendMessage()
    }
    let changeMessageText = (e) => {
        let text = e.target.value
       props.changeMessageText(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.flex_colomn}>
                    <textarea placeholder={'enter your message..'}
                              onChange={changeMessageText} value={newMessageBody}/>
                    <button onClick={sendMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs