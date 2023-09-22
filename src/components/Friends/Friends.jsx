import React from "react";
import styles from "./Friends.module.css"
import ErrorBoundary from "../common/Preloader/ErrorBoundary";
import Paginator from "../common/Paginator/Paginator";
import Friend from "./Friend";

const Friends = (props) => {
    return (<div className={styles.users_section}>
        <h3>Users</h3>

        <ul>
            <Paginator totalUsersCount={props.totalUsersCount}
                       portionSize={15} countPerPage={props.countPerPage}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>

            {props.isFetching
                ? <ErrorBoundary width={{width: "120px"}}/>

                : props.users.map(u =>  <Friend user={u} followingProgress={props.followingProgress}
                                               subscribeFollower={props.subscribeFollower}
                                               deleteFollower={props.deleteFollower}/>)
            }
        </ul>
    </div>)
}

export default Friends;