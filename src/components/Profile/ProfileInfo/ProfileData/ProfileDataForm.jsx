import {useForm} from "react-hook-form";
import style from "./ProfileDataForm.module.css";
import {useState} from "react";

const ProfileDataForm = ({userProfile,sendingSuccess, updateProfileInfo, onSubmitCallback, ...props}) => {
    let [isSubmitSuccess, setSubmitSuccess] = useState(false)

    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        watch,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onChange",
        criteriaMode: 'all',
        defaultValues: {
            lookingForAJob: userProfile.lookingForAJob,
            lookingForAJobDescription: userProfile.lookingForAJobDescription,
            fullName: userProfile.fullName,
            aboutMe: userProfile.aboutMe,
            contacts: {
                github: userProfile.contacts.github,
                vk: userProfile.contacts.vk,
                facebook: userProfile.contacts.facebook,
                instagram: userProfile.contacts.instagram,
                twitter: userProfile.contacts.twitter,
                website: userProfile.contacts.website,
                youtube: userProfile.contacts.youtube,
                mainLink: userProfile.contacts.mainLink
            },
        }
    })

    const onSubmit = (data) => {
        updateProfileInfo(data, setError)
        setSubmitSuccess(false)
        onSubmitCallback(false)
        setTimeout(() => {
            setSubmitSuccess(false)
        }, 4000)
        /*reset({
            lookingForAJob: '',
            lookingForAJobDescription: '',
            fullName: '',
            aboutMe: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            },
        })*/
    }

    const handleClearFieldErrors = () => {
        clearErrors();
        setSubmitSuccess(false)
    };

    return (<>
        {isSubmitSuccess && <div className={style.success}>
            Your form was submitted successfully!
        </div>}

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={style.submit_btn} type="submit"/>

            <button className={style.return_btn} type="button" onClick={() => onSubmitCallback(false)}>
                Back
            </button>

            <label>looking for a job:</label>
            <input style={{marginRight: 'auto'}} type={"checkbox"} {...register("lookingForAJob")} />

            <label>My skills:</label>
            <input placeholder="JS, CSS, HTML"   {...register("lookingForAJobDescription")} />

            <label>Full name:</label>
            <input placeholder="John Johns"  {...register("fullName")} />

            <label>About me:</label>
            <input placeholder="I'am funny..." {...register("aboutMe")} />


            <h4 style={{marginBottom:'0'}}>Contacts</h4>
            <ul className={style.contacts_ul}>
                {Object.entries(userProfile.contacts).map(([label, fieldName]) => {
                    return (<li key={`${label}input`} className={style.contacts_li}>
                        <label>{capitalizeFirstLetter(label)}:</label>
                        <input placeholder={label} {...register(`contacts.${label}`)}
                               onChange={() => handleClearFieldErrors()}/>
                    </li>)
                })}</ul>


            {/*    <label>Github:</label>
            <input placeholder="github" {...register("contacts.github")} onChange={() => handleClearFieldErrors()}/>
            <label>Vk:</label>
            <input placeholder="vk"{...register("contacts.vk")} onChange={() => handleClearFieldErrors()}/>
            <label>Facebook:</label>
            <input placeholder="facebook" {...register("contacts.facebook")} onChange={() => handleClearFieldErrors()}/>
            <label>Instagram:</label>
            <input placeholder="instagram" {...register("contacts.instagram")}
                   onChange={() => handleClearFieldErrors()}/>
            <label>Twitter(X):</label>
            <input placeholder="twitter" {...register("contacts.twitter")} onChange={() => handleClearFieldErrors()}/>
            <label>Website:</label>
            <input placeholder="website" {...register("contacts.website")} onChange={() => handleClearFieldErrors()}/>
            <label>Youtube:</label>
            <input placeholder="youtube" {...register("contacts.youtube")} onChange={() => handleClearFieldErrors()}/>
            <label>Main link:</label>
            <input placeholder="mainLink" {...register("contacts.mainLink")} onChange={() => handleClearFieldErrors()}/>
           */} {errors.serverError && <div className={style.error_msg__box}>
            <p>{errors.serverError.type}</p>
            {errors.serverError.messages.map(m => <p className={style.error_msg} key={m}>{m}</p>)}
        </div>}
        </form>
    </>)
}


export default ProfileDataForm;