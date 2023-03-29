import classes from "./TaskListForm.module.css";

function TaskListForm() {
    return (
        <div className={classes.taskListForm}>
            <input placeholder="new taskListName" />
            <button>add new task list</button>
        </div>
    )
}
export default TaskListForm;