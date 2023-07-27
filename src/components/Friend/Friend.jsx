import React from "react";
import styles from "./Friend.module.css"
import axios from "axios";
import userPhoto from "../../assets/img/users_ava.png"


class Friend extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div className={styles.users_section}>
            <h3>Users</h3>
            <ul>
                {
                    this.props.users.map(u =>
                        <li className={styles.friend} key={u.id}>
                            <div className={styles.friend_left_side}>
                                <img className={styles.ava}
                                     src={u.photos.small ? u.photos.small : userPhoto}
                                     alt="friends"/>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.followUser(u.id)
                                    }}>Follow</button>}
                            </div>
                            <div className={styles.friend_right_side}>
                                <div className={styles.friend_right_side_top}>
                                    <span>{u.fullName}</span>
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
        </div>
    }
}

export default Friend;