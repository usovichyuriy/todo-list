import classes from "./Task.module.css";

function Task() {
    return (
        <div className={classes.task}>
            <p>task title</p>
            <button>edit task</button>
            <button>delete task</button>
        </div>
    )
}
export default Task;