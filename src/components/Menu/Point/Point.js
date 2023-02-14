import classes from "./Point.module.css";

function Point(props) {
    return (
        <div className={classes.point}>
            <div className={classes.pointCheckbox}>
                <input type="checkbox" />
            </div>
            <div className={classes.pointDescription}>
                {props.message}
            </div>
            <div className={classes.deleteButton}>
                <button onClick={() => {
                    props.deletePoint(props.message)
                }}>delete</button>
            </div>
        </div>
    )
}
export default Point;