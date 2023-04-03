import classes from "./Header.module.css";

function Header(props) {
    return (
        <header>
            <div className={classes.header}>
                <h3>todo-list</h3>
                {props.isAuth ? <div><button onClick={props.logoutUser}>log out</button></div> : <div></div>}
            </div>
        </header>
    )
}
export default Header;