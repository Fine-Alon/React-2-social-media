import React from "react";
import styles from "./Friend.module.css"

const Friend = ({name,src}) => {
    return (
        <li className={styles.frend}>
            <img className={styles.ava}
                 src={src}
                 alt="friends"/>
            <span>{name}</span>
        </li>
    )
}

export default Friend;