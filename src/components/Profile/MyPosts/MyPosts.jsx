import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    return (
        <div>
            my-posts
            <div>
                <textarea name="a" id="" cols="16" rows="2"></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post likesCount={`11`} message={`I like write in the morning`} />
                <Post likesCount={`42`} message={`This is my first post`} />
                <Post likesCount={`23`} message={`so how are u today?`}/>
            </div>
        </div>
    )
}

export default MyPosts;