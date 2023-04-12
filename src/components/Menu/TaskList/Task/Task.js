import { useState } from "react";
import EditTaskForm from "./EditTaskForm/EditTaskForm";
import classes from "./Task.module.css";
import { Checkbox, IconButton, ThemeProvider, createTheme } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task(props) {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
    }

    const taskTheme = createTheme({

        palette: {
            primary: {
                main: 'rgb(213, 68, 116)'
            },
            secondary: {
                main: 'rgb(54, 60, 72)'
            }
        },
    });

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
                <ThemeProvider theme={taskTheme}>
                    <div className={classes.taskInfo}>
                        <Checkbox />
                        <div className={classes.taskTitle}>
                            <span>{props.title}</span>
                        </div>
                        <div className={classes.taskButtons}>
                            <IconButton onClick={activateEditMode}>
                                <EditIcon color="secondary" />
                            </IconButton>
                            <IconButton onClick={() => {
                                props.deleteTask(props.todoListId, props.taskId)
                            }}>
                                <DeleteIcon color="primary" />
                            </IconButton>
                        </div>
                    </div>
                </ThemeProvider>
            }
        </div>
    )
}
export default Task;