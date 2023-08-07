import React from "react";
import {sendNewMessageActionCreator, updateMessageActionCreator} from "../../Redux/reducer_dialogPage";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import {withAuthRedirect, WithAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

// const isActiveDialog = ({isActive}) => isActive ? style.active : style.dialog

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        currentText: state.dialogPage.currentText,
        isAuth: state.userAuth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageText: (text) => {
            dispatch(updateMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendNewMessageActionCreator())
        },
    }
}

export default compose(
    connect(mapStateToProps,
        mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
