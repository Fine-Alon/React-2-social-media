import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={style.post_area}>
           <h3> my-posts</h3>
            <div>
                <div>
                    <textarea name="a" id="" cols="16" rows="2"></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post likesCount={`11`} message={`I like write in the morning`}/>
                <Post likesCount={`42`} message={`This is my first post`}/>
                <Post likesCount={`23`} message={`so how are u today?`}/>
            </div>
        </div>
    )
}

export default MyPosts;