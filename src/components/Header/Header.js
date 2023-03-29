import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div>
                <h3>todo-list</h3>
            </div>
        </header>
    )
}
export default Header;