import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postInfoComps = props.postInfo.map((post)=>( <Post likesCount={post.countOfLikes} message={post.message}/>))
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
                {postInfoComps}
            </div>
        </div>
    )
}

export default MyPosts;