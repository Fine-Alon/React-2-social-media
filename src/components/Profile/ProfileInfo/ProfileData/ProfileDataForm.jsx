import {useForm} from "react-hook-form";
import style from "./ProfileDataForm.module.css";

const ProfileDataForm = ({userProfile, ...props}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: {
            lookingForAJob: userProfile.lookingForAJob,
            lookingForAJobDescription: userProfile.lookingForAJobDescription,
            fullName: userProfile.fullName,
            aboutMe: userProfile.aboutMe,
            github: userProfile.contacts.github,
            vk: userProfile.contacts.vk,
            facebook: userProfile.contacts.facebook,
            instagram: userProfile.contacts.instagram,
            twitter: userProfile.contacts.twitter,
            website: userProfile.contacts.website,
            youtube: userProfile.contacts.youtube,
            mainLink: userProfile.contacts.mainLink,
        }
    })

    const onSubmit = (data) => console.log(data)

    return (<>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={style.submit_btn} type="submit"/>

            <label>looking for a job:</label>
            <input style={{marginRight: 'auto'}} type={"checkbox"} {...register("lookingForAJob")} />

            <label>My skills:</label>
            <input  {...register("lookingForAJobDescription")} />

            <label>Full name:</label>
            <input {...register("fullName")} />

            <label>About me:</label>
            <input {...register("aboutMe")} />

            <b>Contacts</b>
            <label>Github:</label>
            <input {...register("github")} />
            <label>Vk:</label>
            <input {...register("vk")} />
            <label>Facebook:</label>
            <input {...register("facebook")} />
            <label>Instagram:</label>
            <input {...register("instagram")} />
            <label>Twitter(X):</label>
            <input {...register("twitter")} />
            <label>Website:</label>
            <input {...register("website")} />
            <label>Youtube:</label>
            <input {...register("youtube")} />
            <label>Main link:</label>
            <input {...register("mainLink")} />

        </form>
    </>)
}

export default ProfileDataForm;