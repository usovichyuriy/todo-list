import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import { getAuthUserData, loginUser } from "../../redux/authReducer";
import { useEffect } from "react";
import { Navigate } from "react-router";

let mapStateToProps = (store) => {
    return {
        auth: store.auth,
        captchaUrl: store.security.url
    }
}

const LoginContainer = (props) => {

    useEffect(() => {
        props.getAuthUserData();
    }, [])

    if (props.auth.isAuth) {
        return (
            <Navigate to={'/menu'} />
        )
    }

    return (
        <div>
            <Login {...props} />
        </div>
    )
}
export default compose(connect(mapStateToProps, { getAuthUserData, loginUser }))(LoginContainer);