import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {useForm} from "react-hook-form";
import login from "../../Login/Login";

const MyPosts = (props) => {

    let postInfoComps = props.postInfo.map((p) => (<Post key={p.id} likesCount={p.countOfLikes} message={p.message}/>))
    // let newPostElement = React.createRef()
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm()

    const onSubmit = data => {
        data.newPostText ? props.addNewPost(data.newPostText) : alert('But field is empty...')
    }

    return (
        <div className={style.post_area}>
            <h3> my-posts</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea placeholder="write your post.." {...register("newPostText", {
                        maxLength: {
                            value: 100,
                            message: 'Too much symbols, keep less then 100 symbols'
                        }
                    })}/>
                    {errors.newPostText && <span>{errors.newPostText.message}</span>}
                </div>
                <div>
                    <button type="submit">add post</button>
                </div>
            </form>

            <div className={style.posts}>
                {postInfoComps}
            </div>
        </div>
    )
}
export default MyPosts;