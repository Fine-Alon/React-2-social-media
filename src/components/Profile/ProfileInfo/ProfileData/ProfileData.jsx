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
                    {/* Object.keys - create string from inner Obj */}
                    {/* so we do map(key) to create Contacts */}
                    {Object.keys(userProfile.contacts).map(key => {
                     return <Contact key={key} title={key} value={userProfile.contacts[key]}/>
                    })}
                </ul>
            </div>
        </>
    )
}

const Contact = ({title, value}) => {
    return (<li>
        <b>{title}:</b> {value}
    </li>)
}

export default ProfileData;