import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.header}>
            <div>
                <h3>todo-list</h3>
                <button>log out</button>
            </div>
        </header>
    )
}
export default Header;