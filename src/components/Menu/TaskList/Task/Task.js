import classes from "./Task.module.css";

function Task(props) {
    return (
        <div className={classes.task}>
            <p>{props.title}</p>
            <button>edit task</button>
            <button>delete task</button>
        </div>
    )
}
export default Task;