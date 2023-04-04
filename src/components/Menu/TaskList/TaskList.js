import { useState } from "react";
import EditTaskListForm from "./EditTaskListForm/EditTaskListForm";
import Task from "./Task/Task";
import classes from "./TaskList.module.css";

function TaskList(props) {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
    }

    let tasks = props.tasks.map(task => {
        return <Task taskTitle={task.taskTitle} />
    })

    return (
        <div className={classes.taskList}>
            {editMode ? <EditTaskListForm title={props.title} id={props.id}
                editTaskListTitle={props.editTaskListTitle} deactivateEditMode={deactivateEditMode} /> :
                <div className={classes.taskListInfo}>
                    <h4>{props.title}</h4>
                    <button>add new task</button>
                    <button onClick={activateEditMode}>edit task list title</button>
                    <button onClick={() => {
                        props.deleteTaskList(props.id)
                    }}>delete task list</button>
                </div>
            }
            <div>
                {tasks}
            </div>
        </div>
    )
}
export default TaskList;