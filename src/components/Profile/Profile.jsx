import React from 'react'
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <body className={style.content}>
        <ProfileInfo userProfile={props.userProfile}/>
        <MyPostsContainer/>
        </body>
    )
}

export default Profile;