import React from "react" ;
import Login from "./Login";
import {connect} from "react-redux";
import {loginUser} from "../../Redux/reducer_login";

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        // print the form values from submitted field to the console
        console.log(formData)
        props.loginUser(formData)
    }

    return (
        <div>
            <Login {...props}
                   onSubmit={onSubmit}
                   loginUser={props.loginUser}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

connect(mapStateToProps, {loginUser})(LoginContainer)

export default LoginContainer
