import { connect } from "react-redux";
import { compose } from "redux";
import Login from "./Login";
import { loginUser } from "../../redux/authReducer";

let mapStateToProps = (store) => {
    return {
        auth: store.auth,
        captchaUrl: store.security.url
    }
}

const LoginContainer = (props) => {
    return (
        <div>
            <Login {...props} />
        </div>
    )
}
export default compose(connect(mapStateToProps, { loginUser }))(LoginContainer);