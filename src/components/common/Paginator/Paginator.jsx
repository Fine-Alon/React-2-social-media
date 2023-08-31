import React from "react";
import styles from "./Paginator.module.css"

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.countPerPage)
    let pagesButtons = []

    for (let i = 52; i <= 65; i++) {
        pagesButtons.push(i)
    }

    return (
        <div className={styles.pages}>
            {pagesButtons.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p
                    ? styles.currentPage
                    : ''}>{p},
                    </span>
            })}
        </div>)
}
export default Paginator;