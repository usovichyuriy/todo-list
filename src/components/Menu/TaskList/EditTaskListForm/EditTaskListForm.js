import { useFormik } from "formik";
import classes from "./EditTaskListForm.module.css";
import { Button, OutlinedInput, ThemeProvider, createTheme } from "@mui/material";

function EditTaskListForm(props) {
    const formik = useFormik({
        initialValues: {
            title: props.title
        },
        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.editTaskListTitle(props.id, formData);
                formik.values.title = '';
                setSubmitting(false);
                props.deactivateUpdateListTitle();
            }, 400)
        }
    })

    const editTaskListFormTheme = createTheme({
        palette: {
            primary: {
                main: 'rgb(213, 68, 116)'
            }
        },
    });

    return (
        <div className={classes.editTaskListForm}>
            <form onSubmit={formik.handleSubmit}>
                <ThemeProvider theme={editTaskListFormTheme}>
                    <div className={classes.editTaskListInput}>
                        <OutlinedInput
                            fullWidth
                            id="title"
                            name="title"
                            autoComplete="off"
                            value={formik.values.title}
                            onChange={formik.handleChange} />
                    </div>
                    <div className={classes.editTaskListButtons}>
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                        >save</Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={props.deactivateUpdateListTitle}
                        >exit</Button>
                    </div>
                </ThemeProvider>
            </form>
        </div>
    )
}
export default EditTaskListForm;