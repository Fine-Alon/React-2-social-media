import React from 'react'
import {addPostActionCreator, textUpdatingActionCreator} from "../../../Redux/reducer_profilePage";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postInfo: state.profilePage.postInfo,
        messageToPost: state.profilePage.messageToPost,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (textBody) => {
            let action = textUpdatingActionCreator(textBody);
            dispatch(action)
        },
        addPostBtn: () => {
           // let messageToPost = state.profilePage.messageToPost
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;