import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import sadSmile from "../../../assets/img/sadSmile.png";
import luckySmile from "../../../assets/img/luckySmile.png";
import myAvatar from "../../../assets/img/users_ava.png";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({userProfile, userStatus, updateStatus, ...props}) => {
    if (!userProfile) {
        return <Preloader width={{width: "100%"}}/>
    }

    const onImageChange = (e) => {
        let file = e.target.files[0]
        props.updateProfilePhoto(file)
    }

    return (
        <div className={style.content}>
            <div className={style.data}>
                <img className={style.avatar} src={userProfile.photos.large || myAvatar} alt="profile pic"/>

                <input onChange={onImageChange} type="file" className={style.uploadBTN}/>
            </div>
            <ProfileStatusHooks updateStatus={updateStatus} userStatus={userStatus}/>

            <p>{userProfile.aboutMe}</p>
            <ul className={style.contacts}>
                contacts:
                <li>{userProfile.contacts.facebook}</li>
                <li>{userProfile.contacts.website}</li>
                <li>{userProfile.contacts.vk}</li>
                <li>{userProfile.contacts.twitter}</li>
                <li>{userProfile.contacts.instagram}</li>
                <li>{userProfile.contacts.youtube}</li>
                <li>{userProfile.contacts.github}</li>
                <li>{userProfile.contacts.mainLink}</li>
            </ul>
            <div className={style.isWork}>
                <div>lookingForAJob?</div>
                {userProfile.lookingForAJob ? <span><img src={luckySmile}/>what is your offer..?</span>
                    : <span><img src={sadSmile}/>No, sorry..</span>}
            </div>
            <div><span>Description: </span>
                {userProfile.lookingForAJobDescription}
            </div>
            <div>fullName:
                <span>  {(userProfile.fullName).toUpperCase()}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;