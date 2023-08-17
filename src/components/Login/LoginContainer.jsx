import React from "react" ;
import Login from "./Login";
import {connect} from "react-redux";
import {loginUser} from "../../Redux/reducer_login";

const LoginContainer = (props) => {

    return (
        <div>
            <Login {...props}
                   loginUser={props.loginUser}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

connect(mapStateToProps, {loginUser})(LoginContainer)

export default LoginContainer
