import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.userAuth.isAuth
})

export const withAuthRedirect = (Component) => {
    let redirectComponent = (props) => {

        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props} />
    }

    const connectRedirectComponent =
        connect(mapStateToPropsRedirect, {})(redirectComponent)

    return connectRedirectComponent
}