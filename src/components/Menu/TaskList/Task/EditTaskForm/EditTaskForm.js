import { useFormik } from "formik";
import classes from "./EditTaskForm.module.css";

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
                <input
                    id={key}
                    name={key}
                    placeholder={key}
                    autoComplete="off"
                    value={formik.values[key] || ''}
                    onChange={formik.handleChange} />
            </div>
        )
    })

    return (
        <div className={classes.editTaskForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.editTaskInput}>
                    {inputs}
                </div>
                <div className={classes.editTaskButtons}>
                    <button type="submit">save</button>
                    <button onClick={() => {
                        props.deactivateEditMode()
                    }}>exit</button>
                </div>
            </form>
        </div>
    )
}
export default EditTaskForm;