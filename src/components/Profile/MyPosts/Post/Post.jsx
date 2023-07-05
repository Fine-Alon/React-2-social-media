import React from 'react'
import style from './Post.module.css'

const Post = (props) => {

    return (
        <div className={style.item} >
            <img src="https://cdn.dribbble.com/userupload/8277602/file/original-69b457bdccf5b1f479b58d9b8124d97b.png?compress=1&crop=0x0-1600x1200&resize=840x630&vertical=center" alt="" />
            {props.message}
            <div>
                <button>like</button> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;