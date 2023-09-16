import {useForm} from "react-hook-form";
import style from "./ProfileDataForm.module.css";

const ProfileDataForm = ({userProfile,onSubmit, ...props}) => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
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

    return (<>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={style.submit_btn} type="submit"/>

            <label>looking for a job:</label>
            <input style={{marginRight: 'auto'}} type={"checkbox"} {...register("lookingForAJob")} />

            <label>My skills:</label>
            <input placeholder="JS, CSS, HTML"   {...register("lookingForAJobDescription")} />

            <label>Full name:</label>
            <input placeholder="John Johns"  {...register("fullName")} />

            <label>About me:</label>
            <input placeholder="I'am funny..." {...register("aboutMe")} />

            <b>Contacts</b>
            <label>Github:</label>
            <input placeholder="github" {...register("contacts.github")} />
            <label>Vk:</label>
            <input  placeholder="vk"{...register("contacts.vk")} />
            <label>Facebook:</label>
            <input placeholder="facebook" {...register("contacts.facebook")} />
            <label>Instagram:</label>
            <input placeholder="instagram" {...register("contacts.instagram")} />
            <label>Twitter(X):</label>
            <input placeholder="twitter" {...register("contacts.twitter")} />
            <label>Website:</label>
            <input placeholder="website" {...register("contacts.website")} />
            <label>Youtube:</label>
            <input placeholder="youtube" {...register("contacts.youtube")} />
            <label>Main link:</label>
            <input placeholder="mainLink" {...register("contacts.mainLink")} />

        </form>
    </>)
}


export default ProfileDataForm;