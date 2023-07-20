import React from 'react'
import {addPostActionCreator, textUpdatingActionCreator} from "../../../Redux/reducer_profilePage";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContex";


const MyPostsContainer = () => {
    // let state = props.store.getState()

    return (
        <StoreContext.Consumer>
            {(store) => {
                let messageToPost = store.getState().profilePage.messageToPost

                let postInfoComps = store.getState().profilePage.postInfo

                let onTextChange = (textBody) => {
                    let action = textUpdatingActionCreator(textBody);
                    store.dispatch(action)
                }
                let addPostBtn = () => {
                    messageToPost = store.getState().profilePage.messageToPost
                    store.dispatch(addPostActionCreator(messageToPost))
                }
                return (
                    <MyPosts onTextChange={onTextChange} addPostBtn={addPostBtn}
                             messageToPost={messageToPost} postInfo={postInfoComps}/>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;