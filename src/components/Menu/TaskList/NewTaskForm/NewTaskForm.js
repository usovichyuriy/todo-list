import { useFormik } from "formik";
import classes from "./NewTaskForm.module.css";

function NewTaskForm() {
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                console.log(formData);
                formik.values.title = '';
                setSubmitting(false);
            }, 400)
        }
    })
    return (
        <div className={classes.newTaskForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.newTaskInput}>
                    <input id="title"
                        name="title"
                        placeholder="new task title"
                        autoComplete="off"
                        value={formik.values.title}
                        onChange={formik.handleChange} />
                </div>
                <div className={classes.newTaskButton}>
                    <button type="submit">add new task</button>
                    <button>exit</button>
                </div>
            </form>
        </div>
    )
}
export default NewTaskForm;