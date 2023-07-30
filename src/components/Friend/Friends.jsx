import React from "react";
import styles from "./Friend.module.css"
import userPhoto from "../../assets/img/users_ava.png"
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.countPerPage)
    let pagesButtons = []

    for (let i = 1; i <= 10; i++) {
        pagesButtons.push(i)
    }

    return (<div className={styles.users_section}>
        <h3>Users</h3>

        <ul>
            <div className={styles.pages}>
                {pagesButtons.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }}
                                 className={props.currentPage === p ? styles.currentPage : ''}>
                            {p},</span>
                })}
            </div>
            {props.isFetching ? <Preloader width={{width: "120px"}}/> : null}
            {
                props.users.map(u =>
                    <li className={styles.friend} key={u.id}>
                        <div className={styles.friend_left_side}>
                            <NavLink to={'/profile' + u.id}>
                                <img className={styles.ava}
                                     src={u.photos.small ? u.photos.small : userPhoto}
                                     alt="friends"/>
                            </NavLink>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followUser(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className={styles.friend_right_side}>
                            <div className={styles.friend_right_side_top}>
                                <span>{u.name}</span>
                                <p>{u.status}</p>
                            </div>
                            <div className={styles.friend_right_side_bottom}>
                                <span>{"u.location.country"}</span>
                                <span>{"u.location.city"}</span>
                            </div>
                        </div>
                    </li>
                )
            }
        </ul>
    </div>)
}

export default Friends;