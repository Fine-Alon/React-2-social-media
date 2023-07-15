import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <body className={style.content}>
        <ProfileInfo/>
        <MyPosts dispatch={props.dispatch}
                 postInfo={props.profilePage.postInfo}
                 messageToPost={props.profilePage.messageToPost}/>
        </body>
    )
}

export default Profile;