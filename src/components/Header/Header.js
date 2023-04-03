import classes from "./Header.module.css";

function Header(props) {
    return (
        <header className={classes.header}>
            <div>
                <h3>todo-list</h3>
                {props.isAuth ? <div><button onClick={props.logoutUser}>log out</button></div> : <div></div>}
            </div>
        </header>
    )
}
export default Header;