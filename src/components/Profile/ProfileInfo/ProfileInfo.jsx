import React, {useState} from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import myAvatar from "../../../assets/img/users_ava.png";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";

const ProfileInfo = ({userProfile, updateProfileInfo, sendingSuccess, userStatus, updateStatus, isOwner, ...props}) => {

    const [adminMode, setAdminMode] = useState(false)

    let startAdminMode = () => {
        setAdminMode(true)
    }

    if (!userProfile) {
        return <Preloader width={{width: "100%"}}/>
    }

    const onMainPhotoSelected = (e) => {
        e.target.files.length && props.updateProfilePhoto(e.target.files[0])
    }

    const handleProfileDataFormSubmit = () => {
           setAdminMode(false)
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

            {adminMode
                ? <ProfileDataForm onSubmitCallback={handleProfileDataFormSubmit} sendingSuccess={sendingSuccess}
                                   updateProfileInfo={updateProfileInfo} userProfile={userProfile} isOwner={isOwner}/>
                : <ProfileData startAdminMode={startAdminMode} userProfile={userProfile} isOwner={isOwner}/>
            }
        </div>
    )
}

export default ProfileInfo;