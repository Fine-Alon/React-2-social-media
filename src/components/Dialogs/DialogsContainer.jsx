import React from "react";
import {sendNewMessageActionCreator, updateMessageActionCreator} from "../../Redux/reducer_dialogPage";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        currentText: state.dialogPage.currentText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        changeMessageText : (text) => {
            dispatch(updateMessageActionCreator(text))
        },
        sendMessage : () => {
            dispatch(sendNewMessageActionCreator())
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;