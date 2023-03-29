import Task from "../Task/Task";
import classes from "./TaskList.module.css";

function TaskList() {
    return (
        <div className={classes.taskList}>
            <div>
                <p>taskList title</p>
                <button>add new task</button>
                <button>edit task list title</button>
                <button>delete task list</button>
            </div>
            <Task />
        </div>
    )
}
export default TaskList;