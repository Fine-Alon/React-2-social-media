import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img alt='kartinka' src="https://cdn.dribbble.com/userupload/8221147/file/original-26ba49bbf930577e669aa44086a1345e.png?compress=1&resize=400x300&vertical=center"></img>
        </header>
    )
}

export default Header;