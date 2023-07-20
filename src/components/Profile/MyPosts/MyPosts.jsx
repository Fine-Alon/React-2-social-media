import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postInfoComps = props.postInfo.map((p) => (<Post key={p.id} likesCount={p.countOfLikes} message={p.message}/>))

    let newPostElement = React.createRef()

    let addPostBtn = () => {
        props.addPostBtn()
    }

    let onTextChange = () => {
       let textBody = newPostElement.current.value
        props.onTextChange(textBody)
    }

    return (
        <div className={style.post_area}>
            <h3> my-posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onTextChange}
                              value={props.messageToPost}/>
                </div>
                <div>
                    <button onClick={addPostBtn}>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postInfoComps}
            </div>
        </div>
    )
}

export default MyPosts;