import { useState } from "react";
import EditTaskListForm from "./EditTaskListForm/EditTaskListForm";
import NewTaskForm from "./NewTaskForm/NewTaskForm";
import Task from "./Task/Task";
import classes from "./TaskList.module.css";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

    const taskListTheme = createTheme({

        palette: {
            primary: {
                main: '#fff'
            }
        },
    });

    return (
        <div className={classes.boxShadow}>
            <div className={classes.taskList}>
                {updateListTitle ?
                    <EditTaskListForm
                        title={props.title}
                        id={props.id}
                        editTaskListTitle={props.editTaskListTitle}
                        deactivateUpdateListTitle={deactivateUpdateListTitle} /> :
                    <div className={classes.taskListInfo}>
                        <div className={classes.taskListTitle}>
                            <span>{props.title}</span>
                        </div>
                        <ThemeProvider theme={taskListTheme}>
                            <div className={classes.taskListButtons}>
                                <Button
                                    size="large"
                                    onClick={activateEditMode}
                                ><AddIcon color="white" /></Button>
                                <Button
                                    size="small"
                                    onClick={activateUpdateListTitle}
                                ><EditIcon /></Button>
                                <Button
                                    size="small"
                                    onClick={() => {
                                        props.deleteTaskList(props.id)
                                    }}><DeleteIcon /></Button>
                            </div>
                        </ThemeProvider>
                    </div>
                }
                {editMode ?
                    <NewTaskForm
                        id={props.id}
                        deactivateEditMode={deactivateEditMode}
                        addNewTask={props.addNewTask} /> :
                    <div></div>
                }
                <div>
                    {tasks}
                </div>
            </div>
        </div>
    )
}
export default TaskList;