import classes from "./Task.module.css";

function Task(props) {
    return (
        <div className={classes.task}>
            <p>{props.taskTitle}</p>
            <button>edit task</button>
            <button>delete task</button>
        </div>
    )
}
export default Task;