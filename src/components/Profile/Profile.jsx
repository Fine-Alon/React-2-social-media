import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <body className={style.content}>
        <ProfileInfo/>
        <MyPosts postInfo={props.postInfo}/>
        </body>
    )
}

export default Profile;