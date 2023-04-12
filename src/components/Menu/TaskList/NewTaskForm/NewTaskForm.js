import { useFormik } from "formik";
import classes from "./NewTaskForm.module.css";
import { Button, OutlinedInput, ThemeProvider, createTheme } from "@mui/material";

function NewTaskForm(props) {
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.addNewTask(props.id, formData);
                formik.values.title = '';
                setSubmitting(false);
                props.deactivateEditMode();
            }, 400)
        }
    })

    const newTaskFormTheme = createTheme({
        palette: {
            primary: {
                main: 'rgb(213, 68, 116)'
            }
        },
    });

    return (
        <div className={classes.newTaskForm}>
            <form onSubmit={formik.handleSubmit}>
                <ThemeProvider theme={newTaskFormTheme}>
                    <div className={classes.newTaskInput}>
                        <OutlinedInput
                            fullWidth
                            id="title"
                            name="title"
                            placeholder="new task title"
                            autoComplete="off"
                            value={formik.values.title}
                            onChange={formik.handleChange} />
                    </div>
                    <div className={classes.newTaskButtons}>
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                        >new task</Button>
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
export default NewTaskForm;