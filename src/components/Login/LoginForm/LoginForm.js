import { useFormik } from "formik";
import classes from "./LoginForm.module.css";
import loginFormSchema from "../../FormValidation/LoginFormSchema";
import {
  Button,
  Checkbox,
  OutlinedInput,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function LoginForm(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
      captcha: null,
    },

    validate: (formData) => {
      const errors = {};
      if (!formData.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },

    validationSchema: loginFormSchema,

    onSubmit: (formData, { setSubmitting }) => {
      setTimeout(() => {
        props.loginUser(formData);
        setSubmitting(false);
      }, 400);
    },
  });

  const loginFormTheme = createTheme({
    palette: {
      primary: {
        main: "rgb(213, 68, 116)",
        darker: "#053e85",
      },
      neutral: {
        main: "rgb(51,52,54)",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className={classes.loginForm}>
      <form onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={loginFormTheme}>
          <div className={classes.emailInput}>
            <OutlinedInput
              fullWidth
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div className={classes.errorMessage}>{formik.errors.email}</div>
            ) : (
              <div></div>
            )}
          </div>
          <div className={classes.passwordInput}>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div className={classes.errorMessage}>
                {formik.errors.password}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className={classes.loginFormCheckbox}>
            <Checkbox
              type={"checkbox"}
              name={"rememberMe"}
              onChange={formik.handleChange}
            />
            <label htmlFor={"rememberMe"}>remember me</label>
          </div>
          {props.captchaUrl && (
            <div className={classes.captcha}>
              <img src={props.captchaUrl} />
              <OutlinedInput
                hiddenLabel
                fullWidth
                id="captcha"
                name="captcha"
                label="captcha"
                placeholder="Captcha"
                value={formik.values.captcha}
                onChange={formik.handleChange}
              />
            </div>
          )}
          {props.errorMessage ? (
            <div className={classes.errorMessage}>
              <span>{props.errorMessage}</span>
            </div>
          ) : (
            <div></div>
          )}
          <div className={classes.loginButton}>
            <Button fullWidth variant="contained" type="submit">
              Log in
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </div>
  );
}
export default LoginForm;
