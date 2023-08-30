import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

const Dialogs = ({dialogs, messages, addNewMessage}) => {
    let dialogsElements = dialogs.map((d) => (<Dialog key={d.id} name={d.name} id={d.id}/>))
    let messagesElements = messages.map((m) => (<Message key={m.id} name={m.name}/>))

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm()

    const onSubmit = (data) => {
        data.dialogsNewMessageBody ? addNewMessage(data.dialogsNewMessageBody) : alert('before I help u send message, write the message :)')

    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <form className={style.flex_colomn} onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder={'enter your message...'}
                              {...register('dialogsNewMessageBody', {
                                  maxLength: {
                                      value: 100,
                                      message: 'Too much symbols, keep less then 100 symbols'
                                  }
                              })}
                              aria-invalid={errors.login ? 'true' : 'false'}
                    />
                    {errors.dialogsNewMessageBody && <span>{errors.dialogsNewMessageBody.message}</span>}
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Dialogs