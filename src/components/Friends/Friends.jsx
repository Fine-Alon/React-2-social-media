import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";


const Friends = (props) => {
    let friendsElements = props.chats.map((f) => (<Friend key={f.id} src={f.src} name={f.name}/>))

    return (
        <ul className={styles.frends}>
            {friendsElements}
        </ul>
    );
};

export default Friends;