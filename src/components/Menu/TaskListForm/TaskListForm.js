import { useFormik } from "formik";
import classes from "./TaskListForm.module.css";

function TaskListForm() {

    const formik = useFormik({
        initialValues: {
            taskListTitle: ''
        },
        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                console.log(formData);
                formik.values.taskListTitle = '';
                setSubmitting(false);
            }, 400)
        }
    })
    return (
        <div className={classes.taskListForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.newTaskListInput}>
                    <input id="taskListTitle"
                        name="taskListTitle"
                        placeholder="new taskList title"
                        autoComplete="off"
                        value={formik.values.taskListTitle}
                        onChange={formik.handleChange} />
                </div>
                <div className={classes.newTaskListButton}>
                    <button type="submit">add new task list</button>
                </div>
            </form>
        </div>
    )
}
export default TaskListForm;