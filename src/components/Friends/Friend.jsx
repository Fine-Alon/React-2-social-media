import React from "react";
import styles from "./Friends.module.css"
import userPhoto from "../../assets/img/users_ava.png"
import {NavLink} from "react-router-dom";
const Friend = ({followingProgress, subscribeFollower, deleteFollower, user,}) => {
    return <>
        {
            <li className={styles.friend} key={user.id}>
                <div className={styles.friend_left_side}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.ava}
                             src={user.photos.small ? user.photos.small : userPhoto}
                             alt="friends"/>
                    </NavLink>
                    {user.followed

                        ? <button disabled={followingProgress.includes(user.id)}
                                  onClick={() => {
                                      deleteFollower(user.id)
                                  }}>
                            Unfollow</button>

                        : <button disabled={followingProgress.includes(user.id)}
                                  onClick={() => {
                                      subscribeFollower(user.id)
                                  }}>
                            Follow</button>}

                </div>
                <div className={styles.friend_right_side}>
                    <div className={styles.friend_right_side_top}>
                        <span>{user.name}</span>
                        <p>{user.status}</p>
                    </div>
                    <div className={styles.friend_right_side_bottom}>
                        <span>{"user.location.country"}</span>
                        <span>{"user.location.city"}</span>
                    </div>
                </div>
            </li>
        }
    </>
}

export default Friend;