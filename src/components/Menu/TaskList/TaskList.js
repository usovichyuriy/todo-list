import Task from "../Task/Task";
import classes from "./TaskList.module.css";

function TaskList(props) {

    let tasks = props.tasks.map(task => {
        return <Task taskTitle={task.taskTitle} />
    })

    return (
        <div className={classes.taskList}>
            <div className={classes.taskListInfo}>
                <h4>{props.title}</h4>
                <button>add new task</button>
                <button>edit task list title</button>
                <button>delete task list</button>
            </div>
            <div>
                {tasks}
            </div>
        </div>
    )
}
export default TaskList;