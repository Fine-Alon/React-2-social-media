import React from 'react'
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.content}>
        <ProfileInfo isOwner={props.isOwner}
                     updateProfileInfo={props.updateProfileInfo}
                     updateStatus={props.updateStatus}
                     userStatus={props.userStatus}
                     sendingSuccess={props.sendingSuccess}
                     updateProfilePhoto={props.updateProfilePhoto}
                     userProfile={props.userProfile}/>
        <MyPostsContainer/>
        </div>
    )
}

export default Profile;