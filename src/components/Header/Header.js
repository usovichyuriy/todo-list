import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header>
      <div className={classes.header}>
        <h3>
          <a href="/">todo-list</a>
        </h3>
        {props.isAuth ? (
          <div>
            <Button onClick={props.logoutUser}>
              <LogoutIcon />
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}
export default Header;
