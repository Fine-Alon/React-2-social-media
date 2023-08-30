import React from "react";
import styles from "./Friend.module.css"

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.countPerPage)
    let pagesButtons = []

    for (let i = 32; i <= 45; i++) {
        pagesButtons.push(i)
    }

    //  <Paginator totalUsersCount={totalUsersCount} countPerPage={countPerPage}
    //                        onPageChanged={onPageChanged} currentPage={currentPage}/>

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