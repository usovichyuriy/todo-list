import classes from './Header.module.css';

function Header(props) {
    return (
        <header>
            <div className={classes.header}>
                <h3>Things to Do</h3>
            </div>
        </header>
    )
}
export default Header;