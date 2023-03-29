import LoginForm from "./LoginForm/LoginForm";
import classes from "./Login.module.css";

function Login() {
    return (
        <div className={classes.loginPage}>
            <h4>login page</h4>
            <LoginForm />
        </div>
    )
}
export default Login;