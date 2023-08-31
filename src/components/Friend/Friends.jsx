import React from "react";
import styles from "./Friend.module.css"
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import Friend from "./Friend";

const Friends = (props) => {
    return (<div className={styles.users_section}>
        <h3>Users</h3>

        <ul>
            <Paginator totalUsersCount={props.totalUsersCount} countPerPage={props.countPerPage}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>

            {props.isFetching ? <Preloader width={{width: "120px"}}/> : null}

            {
                props.users.map(u => <Friend user={u} followingProgress={props.followingProgress}
                                             subscribeFollower={props.subscribeFollower}
                                             deleteFollower={props.deleteFollower}/>)
            }
        </ul>
    </div>)
}

export default Friends;