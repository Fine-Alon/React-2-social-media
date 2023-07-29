import React from 'react'
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    debugger
    return (
        <body className={style.content}>
        <ProfileInfo props={props}/>
        <MyPostsContainer/>
        </body>
    )
}

export default Profile;