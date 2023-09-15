import style from "./ProfileData.module.css";
import React from "react";

const ProfileData = ({userProfile, isOwner, startAdminMode, ...props}) => {

    return (
        <>
            {isOwner ? <button className={style.admin_btn} onClick={startAdminMode}>change data</button> : ''}

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
        </>
    )
}

export default ProfileData;