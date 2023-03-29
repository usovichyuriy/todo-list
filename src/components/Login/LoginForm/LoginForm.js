import { useFormik } from "formik";
import classes from "./LoginForm.module.css";
import loginFormSchema from "../../FormValidation/LoginFormSchema";

function LoginForm() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },

        validate: (formData) => {
            const errors = {};
            if (!formData.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        validationSchema: loginFormSchema,

        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                console.log(formData);
                setSubmitting(false);
            }, 400);
        }
    });

    return (
        <div className={classes.loginForm}>
            <form onSubmit={formik.handleSubmit}>
                
                <div className={classes.emailInput}>
                    <input id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        onChange={formik.handleChange}
                    />
                {formik.errors.email ? <div>{formik.errors.email}</div> : <div></div>}
                </div>
                <div className={classes.passwordInput}>
                    <input id="password"
                        name="password"
                        type="password"
                        placeholder="Your password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : <div></div>}
                </div>
                <div className={classes.loginFormChechbox}>
                    <input type="checkbox" name={"rememberMe"} onChange={formik.handleChange} />
                    <label htmlFor={'rememberMe'}>remember me</label>
                </div>
                <div className={classes.loginButton}>
                    <button type="submit">log in</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;