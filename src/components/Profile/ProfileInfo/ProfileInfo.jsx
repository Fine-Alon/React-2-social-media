import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import sadSmile from "../../../assets/img/sadSmile.png";
import luckySmile from "../../../assets/img/luckySmile.png";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader width={{width: "100%"}}/>
    }

    return (
        <div className={style.content}>
            {/*      <div>
                <img className={style.contentImg} alt='Emage'
                     src="https://cdn.dribbble.com/userupload/8221626/file/original-13466c8aa976555e1dfe0dd947239391.jpg?compress=1&resize=752x"/>
            </div>*/}

            <div className={style.data}>
                {props.userProfile.photos.large ? <img className={style.avatar} src={props.userProfile.photos.large}/>
                    : <img className={style.avatar}
                           src="https://cdn.dribbble.com/userupload/9066333/file/original-b77ad6740798ed3ddb5f01e51c821124.png?resize=840x630&vertical=center"
                           alt="profile pic"/>
                }
                <ProfileStatusHooks updateStatus={props.updateStatus} userStatus={props.userStatus}/>
            </div>


            <p>{props.userProfile.aboutMe}</p>
            <ul className={style.contacts}>
                contacts:
                <li>{props.userProfile.contacts.facebook}</li>
                <li>{props.userProfile.contacts.website}</li>
                <li>{props.userProfile.contacts.vk}</li>
                <li>{props.userProfile.contacts.twitter}</li>
                <li>{props.userProfile.contacts.instagram}</li>
                <li>{props.userProfile.contacts.youtube}</li>
                <li>{props.userProfile.contacts.github}</li>
                <li>{props.userProfile.contacts.mainLink}</li>
            </ul>
            <div className={style.isWork}>
                <div>lookingForAJob?</div>
                {props.userProfile.lookingForAJob ? <span><img src={luckySmile}/>what is your offer..?</span>
                    : <span><img src={sadSmile}/>No, sorry..</span>}
            </div>
            <div><span>Description: </span>
                {props.userProfile.lookingForAJobDescription}
            </div>
            <div>fullName:
                <span>  {(props.userProfile.fullName).toUpperCase()}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;