import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map((d) => (<Dialog key={d.id} name={d.name} id={d.id}/>))
    let messagesElements = props.messages.map((m) => (<Message key={m.id} name={m.name}/>))

    const onSubmit = (value)=>{
        console.log(value)
        props.addNewMessage(value.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}

                <AddMessageForm onSubmit={onSubmit}/>

            </div>
        </div>
    )
}

let AddMessageForm = (props)=>{

    const {handleSubmit} = props

    return (
        <form className={style.flex_colomn} onSubmit={handleSubmit}>

            <Field name="newMessageBody" component="textarea" placeholder={'enter your message..'} />

            <button type="submit">add message</button>
        </form>
    )
}

AddMessageForm = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs