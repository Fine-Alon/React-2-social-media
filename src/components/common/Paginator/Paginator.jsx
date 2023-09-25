import React, {useState} from "react";
import styles from "./Paginator.module.css"

const Paginator = ({portionSize,...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.countPerPage)

    let pagesButtons = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesButtons.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [step, setStep] = useState(1)
    let startPortionNumber = (step - 1) * portionSize + 1
    let endPortionNumber = startPortionNumber + portionSize - 1


    return (<div className={styles.paginator_container}>
        {startPortionNumber > 1 &&
            <button onClick={() => {
                setStep((step - 1))
            }}>prev</button>
        }
        <div className={styles.pages}>
            {pagesButtons
                .filter(p => p >= startPortionNumber && p <= endPortionNumber)
                .map(p => {
                    return <span key={p} onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p
                        ? styles.currentPage
                        : ''}>{p}{p !== endPortionNumber ? "," : "..."}
                    </span>
                })}
            <span onClick={() => {
                props.onPageChanged(pagesCount)
            }} className={props.currentPage === pagesCount
                ? styles.currentPage
                : ''}> {pagesCount}
             </span>
        </div>
        {endPortionNumber < pagesCount &&
            <button onClick={() => {
                setStep(step + 1)
            }}>next</button>
        }

    </div>)
}
export default Paginator;