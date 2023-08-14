import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postInfoComps = props.postInfo.map((p) => (<Post key={p.id} likesCount={p.countOfLikes} message={p.message}/>))
    // let newPostElement = React.createRef()

    const onSubmit = (values) => {
        console.log(values.newPosttext);
        props.addNewPost(values.newPosttext)
    }

    return (
        <div className={style.post_area}>
            <h3> my-posts</h3>
            <AddNewPostForm onSubmit={onSubmit}/>

            <div className={style.posts}>
                {postInfoComps}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" type="textarea" name="newPosttext" placeholder="write your post.."/>
            </div>
            <div>
                <button type="submit">add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;