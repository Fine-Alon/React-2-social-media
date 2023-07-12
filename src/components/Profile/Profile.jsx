import React from 'react'
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostToState} from "../../Redux/state";

const Profile = (props) => {
    return (
        <body className={style.content}>
        <ProfileInfo/>
        <MyPosts addPostToState={addPostToState}
                 postInfo={props.profilePage.postInfo}/>
        </body>
    )
}

export default Profile;