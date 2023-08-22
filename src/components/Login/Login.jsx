import React from "react" ;
import style from "./Login.module.css";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {loginUser} from "../../Redux/reducer_auth";
import {Navigate} from "react-router-dom";
import {authAPI} from "../../api/api";

const Login = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isValid},
        clearErrors,
        setError,
        reset
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            rememberMe: true,
        },
        criteriaMode: 'all',
    })
    const onSubmit = (data) => {
        console.log(data)
        const {email, password, rememberMe} = data
        props.loginUser(email, password, rememberMe, setError)

        reset({
            email: '',
            password: '',
            rememberMe: false
        }, {keepErrors: true})
    }
    // console.log(watch()) // watch input value by passing the name of it

    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type="email" placeholder="email" className={errors.email ? style.inputError : ''}
                           {...register("email", {
                               required: 'Email Address is required'
                               /*   onChange: (e) => {
                                      console.log(e)
                                  },*/
                           })}
                           onFocus={() => clearErrors(["email", "server"])
                           }
                           aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email?.type === "required" && <span role='alert'>{errors.email.message}</span>}
                    {errors.email?.type === "minLength" && <span role='alert'>{errors.email.message}</span>}
                    {errors.email?.type === "maxLength" && <span role='alert'>{errors.email.message}</span>}
                </div>
                <div>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder="password" type='password' className={errors.password ? style.inputError : ''}
                           {...register("password", {required: true, minLength: 4, maxLength: 30})}
                           aria-invalid={errors.password ? 'true' : 'false'}
                           onFocus={() => clearErrors(["password", "server"])}
                    />

                    {/* errors will return when field validation fails  */}
                    {errors.password?.type === 'required' && <span>This field is required</span>}
                    {errors.password?.type === 'minLength' && <span>must be more then 4 symbols</span>}
                    {errors.password?.type === 'maxLength' && <span>must be less then 30 symbols</span>}
                </div>
                <div>
                    <input type="checkbox"{...register('rememberMe')}/>
                    <span>remember me</span>
                </div>
                {errors.server && <div><span className={style.error}>{errors.server.message}</span>
                </div>
                }
                <input type="submit" value='Login'/>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.userAuth.isAuth,
    serverErrorMessage: state.userAuth.serverErrorMessage,
})

export default connect(mapStateToProps, {loginUser})(Login)
