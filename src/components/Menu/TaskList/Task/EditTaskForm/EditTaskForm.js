import { useFormik } from "formik";
import classes from "./EditTaskForm.module.css";
import { Button, OutlinedInput, ThemeProvider, createTheme } from "@mui/material";

function EditTaskForm(props) {
    const formik = useFormik({
        initialValues: {
            title: props.title,
            description: props.description,
            completed: props.completed,
            status: props.status,
            priority: props.priority,
            startDate: props.startDate,
            deadline: props.deadline
        },
        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.editTask(props.todoListId, props.taskId, formData);
                formik.values.title = '';
                setSubmitting(false);
                props.deactivateEditMode();
            }, 400)
        }
    })

    let keys = Object.keys(formik.initialValues);
    let inputs = keys.map(key => {
        return (
            <div className={classes.inputBlock}>
                <span>{key}:</span>
                <OutlinedInput
                    fullWidth
                    id={key}
                    name={key}
                    placeholder={key}
                    autoComplete="off"
                    value={formik.values[key] || ''}
                    onChange={formik.handleChange} />
            </div>
        )
    })

    const editTaskFormTheme = createTheme({
        palette: {
            primary: {
                main: 'rgb(213, 68, 116)'
            }
        },
    });

    return (
        <div className={classes.editTaskForm}>
            <form onSubmit={formik.handleSubmit}>
                <ThemeProvider theme={editTaskFormTheme}>
                    <div className={classes.editTaskInput}>
                        {inputs}
                    </div>
                    <div className={classes.editTaskButtons}>
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                        >save</Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => {
                                props.deactivateEditMode()
                            }}>exit</Button>
                    </div>
                </ThemeProvider>
            </form>
        </div>
    )
}
export default EditTaskForm;