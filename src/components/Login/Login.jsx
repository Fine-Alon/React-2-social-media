import React from "react" ;
import LoginForm from "./LoginForm";

const Login = (props) => {

    return (
        <div>
            <h1>login</h1>
            <LoginForm  onSubmit={props.onSubmit}/>
        </div>
    )
}

export default Login
