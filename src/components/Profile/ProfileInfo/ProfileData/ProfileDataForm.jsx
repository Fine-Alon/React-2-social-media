import {useForm} from "react-hook-form";
import style from "./ProfileDataForm.module.css";
import {connect} from "react-redux";
import {updateProfileInfo} from "../../../../Redux/reducer_profilePage";

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
            <input placeholder="JS, CSS, HTML"   {...register("lookingForAJobDescription")} />

            <label>Full name:</label>
            <input placeholder="John Johns"  {...register("fullName")} />

            <label>About me:</label>
            <input placeholder="I'am funny..." {...register("aboutMe")} />

            <b>Contacts</b>
            <label>Github:</label>
            <input placeholder="github" {...register("github")} />
            <label>Vk:</label>
            <input  placeholder="vk"{...register("vk")} />
            <label>Facebook:</label>
            <input placeholder="facebook" {...register("facebook")} />
            <label>Instagram:</label>
            <input placeholder="instagram" {...register("instagram")} />
            <label>Twitter(X):</label>
            <input placeholder="twitter" {...register("twitter")} />
            <label>Website:</label>
            <input placeholder="website" {...register("website")} />
            <label>Youtube:</label>
            <input placeholder="youtube" {...register("youtube")} />
            <label>Main link:</label>
            <input placeholder="mainLink" {...register("mainLink")} />

        </form>
    </>)
}

export default connect(null,updateProfileInfo)(ProfileDataForm);