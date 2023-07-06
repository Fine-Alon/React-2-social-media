import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={style.content}>
            <div >
                <img alt='Emage'
                     src="https://cdn.dribbble.com/userupload/8221626/file/original-13466c8aa976555e1dfe0dd947239391.jpg?compress=1&resize=752x"/>
            </div>
            <div className={style.data}>
                ava + decscr
            </div>
        </div>
    )
}

export default ProfileInfo;