import { useState } from "react";
import EditTaskForm from "./EditTaskForm/EditTaskForm";
import classes from "./Task.module.css";

function Task(props) {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <div className={classes.task}>
            {editMode ?
                <EditTaskForm
                    title={props.title}
                    description={props.description}
                    completed={props.completed}
                    status={props.status}
                    priority={props.priority}
                    startDate={props.startDate}
                    deadline={props.deadLine}
                    taskId={props.taskId}
                    todoListId={props.todoListId}
                    deactivateEditMode={deactivateEditMode}
                    editTask={props.editTask} /> :
                <div>
                    <p>{props.title}</p>
                    <button onClick={activateEditMode}>edit task</button>
                    <button onClick={() => {
                        props.deleteTask(props.todoListId, props.taskId)
                    }}>delete task</button>
                </div>
            }
        </div>
    )
}
export default Task;