import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {useForm} from "react-hook-form";

const MyPosts = React.memo(({postInfo, addNewPost}) => {
    let postInfoComps = [...postInfo].map((p) => (<Post key={p.message} likesCount={p.countOfLikes} message={p.message}/>))
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors},
    } = useForm()

    const onSubmit = data => {
        data.newPostText ? addNewPost(data.newPostText) : alert('But field is empty...')
        reset({newPostText: ''})
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
})
export default MyPosts;