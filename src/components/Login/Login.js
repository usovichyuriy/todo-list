import LoginForm from "./LoginForm/LoginForm";
import classes from "./Login.module.css";

function Login(props) {
    return (
        <div className={classes.loginPage}>
            <LoginForm
                loginUser={props.loginUser}
                errorMessage={props.auth.errorMessage}
                captchaUrl={props.captchaUrl} />
        </div>
    )
}
export default Login;