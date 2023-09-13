import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import myAvatar from "../../../assets/img/users_ava.png";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({userProfile, userStatus, updateStatus, isOwner, ...props}) => {
    if (!userProfile) {
        return <Preloader width={{width: "100%"}}/>
    }

    const onMainPhotoSelected = (e) => {
        e.target.files.length && props.updateProfilePhoto(e.target.files[0])
    }
    return (
        <div className={style.content}>
            <div className={style.top}>
                <div className={style.avatar_wrapper}>
                    <img className={style.avatar} src={userProfile.photos.large || myAvatar} alt="profile pic"/>
                    {isOwner ? <input onChange={onMainPhotoSelected} type="file" className={style.uploadBTN}/> : ''}
                </div>
            </div>
            <ProfileStatusHooks updateStatus={updateStatus} userStatus={userStatus}/>

            <div className={style.topic}><b>looking for a job:</b>
                {userProfile.lookingForAJob
                    ? <span>  What is your offer..?</span>
                    : <span>  No, sorry..</span>}
            </div>
            {userProfile.lookingForAJob &&
                <div className={style.topic}><b>My skills:</b>
                    <p>{userProfile.lookingForAJobDescription}</p>
                </div>
            }
            <div className={style.topic}><b>Full name:</b>
                <span>  {(userProfile.fullName).toUpperCase()}</span>
            </div>
            <div className={style.topic}><b>About me:</b>
                <p>{userProfile.aboutMe}</p>
            </div>
            <div className={style.topic}><b>Contacts:</b>
                <ul className={style.contacts}>
                    <li>{userProfile.contacts.github}</li>
                    <li>{userProfile.contacts.vk}</li>
                    <li>{userProfile.contacts.facebook}</li>
                    <li>{userProfile.contacts.instagram}</li>
                    <li>{userProfile.contacts.twitter}</li>
                    <li>{userProfile.contacts.website}</li>
                    <li>{userProfile.contacts.youtube}</li>
                    <li>{userProfile.contacts.mainLink}</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;