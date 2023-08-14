import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login">login</label>
                <Field name="login" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <div>
                <label htmlFor="checkbox">remember me</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

export default LoginForm;
