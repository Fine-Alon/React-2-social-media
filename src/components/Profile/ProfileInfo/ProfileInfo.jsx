import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import myAvatar from "../../../assets/img/users_ava.png";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

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

            {isOwner
                ? <ProfileDataForm userProfile={userProfile}/>
                : <ProfileData userProfile={userProfile}/>
            }

        </div>
    )
}

export default ProfileInfo;