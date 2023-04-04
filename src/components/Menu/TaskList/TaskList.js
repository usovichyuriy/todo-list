import { useState } from "react";
import EditTaskListForm from "./EditTaskListForm/EditTaskListForm";
import NewTaskForm from "./NewTaskForm/NewTaskForm";
import Task from "./Task/Task";
import classes from "./TaskList.module.css";

function TaskList(props) {

    let [updateListTitle, setUpdateListTitle] = useState(false);
    let [editMode, setEditMode] = useState(false);

    let activateUpdateListTitle = () => {
        setUpdateListTitle(true);
    }

    let deactivateUpdateListTitle = () => {
        setUpdateListTitle(false);
    }

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
            {updateListTitle ? <EditTaskListForm title={props.title} id={props.id}
                editTaskListTitle={props.editTaskListTitle} deactivateUpdateListTitle={deactivateUpdateListTitle} /> :
                <div className={classes.taskListInfo}>
                    <h4>{props.title}</h4>
                    {editMode ? <NewTaskForm deactivateEditMode={deactivateEditMode} /> :
                        <div>
                            <button onClick={activateEditMode}>add new task</button>
                            <button onClick={activateUpdateListTitle}>edit task list title</button>
                            <button onClick={() => {
                                props.deleteTaskList(props.id)
                            }}>delete task list</button>
                        </div>
                    }
                </div>
            }

            <div>
                {tasks}
            </div>
        </div>
    )
}
export default TaskList;