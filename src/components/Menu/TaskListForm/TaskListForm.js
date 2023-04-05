import { useFormik } from "formik";
import classes from "./TaskListForm.module.css";

function TaskListForm(props) {

    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.addNewTaskList(formData);
                formik.values.title = '';
                setSubmitting(false);
            }, 400)
        }
    })
    return (
        <div className={classes.taskListForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.newTaskListInput}>
                    <input
                        id="title"
                        name="title"
                        placeholder="new taskList title"
                        autoComplete="off"
                        value={formik.values.title}
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