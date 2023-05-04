import LoginForm from "./LoginForm/LoginForm";
import classes from "./Login.module.css";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";

function Login(props) {
  return (
    <div className={classes.loginPageWrapper}>
      <div className={classes.testData}>
        <div>
          <h3>Data</h3>
          <h4>Use this email and password to log in:</h4>
        </div>
        <div>
          <div className={classes.loginData}>
            <EmailIcon />
            <span>snfree2022@gmail.com</span>
            <Button>
              <ContentCopyIcon fontSize="small" />
            </Button>
          </div>
          <div className={classes.loginData}>
            <KeyIcon />
            <span>free2022</span>
            <Button>
              <ContentCopyIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.loginPage}>
        <LoginForm
          loginUser={props.loginUser}
          errorMessage={props.auth.errorMessage}
          captchaUrl={props.captchaUrl}
        />
      </div>
    </div>
  );
}
export default Login;
