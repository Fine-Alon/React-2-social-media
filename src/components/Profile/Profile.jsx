import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <body className={style.content}>
        <ProfileInfo/>
        <MyPosts addPostToState={props.addPostToState}
                 postInfo={props.profilePage.postInfo}
                 messageToPost={props.profilePage.messageToPost}
                 textUpdating={props.textUpdating}/>
        </body>
    )
}

export default Profile;