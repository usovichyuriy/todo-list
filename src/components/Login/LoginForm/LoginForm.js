import classes from "./LoginForm.module.css";

function LoginForm() {
    return (
        <div className={classes.loginForm}>
            <input placeholder="email" />
            <input placeholder="password" />
            <button>log in</button>
        </div>
    )
}
export default LoginForm;