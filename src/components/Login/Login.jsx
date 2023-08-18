import React from "react" ;
import style from "./Login.module.css";
import {useForm} from "react-hook-form";
import warning from "react-redux/es/utils/warning";

const Login = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: {
            login: '@'
        }
    })
    const onSubmit = (data) => console.log(data)
    // console.log(watch()) // watch input value by passing the name of it

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder="login" className={errors.login ? style.inputError : ''}
                           {...register("login", {
                               required: 'This field is required', minLength: {
                                   value: 2,
                                   message: 'must be more then 2 symbols'
                               },
                               maxLength: {
                                   value: 20,
                                   message: 'must be less then 20 symbols'
                               },
                               onChange: (e) => {
                                   console.log(e)
                               },
                           })}
                           aria-invalid={errors.login ? 'true' : 'false'}
                    />
                    {errors.login?.type === "required" && <span role='alert'>{errors.login.message}</span>}
                    {errors.login?.type === "minLength" && <span role='alert'>{errors.login.message}</span>}
                    {errors.login?.type === "maxLength" && <span role='alert'>{errors.login.message}</span>}
                </div>
                <div>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder="password" type='password' className={errors.password ? style.inputError : ''}
                           {...register("password", {required: true, minLength: 4, maxLength: 20})}
                           aria-invalid={errors.password ? 'true' : 'false'}
                    />

                    {/* errors will return when field validation fails  */}
                    {errors.password?.type === 'required' && <span>This field is required</span>}
                    {errors.password?.type === 'minLength' && <span>must be more then 2 symbols</span>}
                    {errors.password?.type === 'maxLength' && <span>must be less then 30 symbols</span>}
                </div>

                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login
