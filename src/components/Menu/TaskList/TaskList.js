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
        if (task.todoListId === props.id) {
            return <Task
                taskId={task.id}
                title={task.title}
                description={task.description}
                todoListId={task.todoListId}
                order={task.order}
                status={task.status}
                priority={task.priority}
                startDate={task.startDate}
                deadline={task.deadline}
                addedDate={task.addedDate}
                deleteTask={props.deleteTask}
                editTask={props.editTask} />
        }
    })

    return (
        <div className={classes.taskList}>
            {updateListTitle ?
                <EditTaskListForm
                    title={props.title}
                    id={props.id}
                    editTaskListTitle={props.editTaskListTitle}
                    deactivateUpdateListTitle={deactivateUpdateListTitle} /> :
                <div className={classes.taskListInfo}>
                    <h4>{props.title}</h4>
                    {editMode ?
                        <NewTaskForm
                            id={props.id}
                            deactivateEditMode={deactivateEditMode}
                            addNewTask={props.addNewTask} /> :
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