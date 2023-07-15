import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, textUpdatingActionCreator} from "../../../Redux/reducer_profilePage";



const MyPosts = (props) => {
    let postInfoComps = props.postInfo.map((p) => (<Post key={p.id} likesCount={p.countOfLikes} message={p.message}/>))

    let newPostElement = React.createRef()

    let addPostBtn = () => {
        props.dispatch(addPostActionCreator())
    }

    let onTextChange = () => {
        let text = newPostElement.current.value
        let action = textUpdatingActionCreator(text);
        props.dispatch(action)
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