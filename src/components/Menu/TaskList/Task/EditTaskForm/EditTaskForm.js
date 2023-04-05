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

    return (
        <div className={classes.editTaskForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.editTaskInput}>
                    <div className={classes.inputBlock}>
                        <span>title:</span>
                        <input 
                            id="title"
                            name="title"
                            autoComplete="off"
                            value={formik.values.title}
                            onChange={formik.handleChange} />
                    </div>
                    <div className={classes.inputBlock}>
                    <span>description:</span>
                    <input 
                        id="description"
                        name="description"
                        placeholder="description"
                        autoComplete="off"
                        value={formik.values.description}
                        onChange={formik.handleChange} />
                    </div>
                    <div className={classes.inputBlock}>
                        <span>completed:</span>
                        <input 
                            id="completed"
                            name="completed"
                            placeholder="completed"
                            autoComplete="off"
                            value={formik.values.completed}
                            onChange={formik.handleChange} />
                    </div>
                    <div className={classes.inputBlock}>
                    <span>status:</span>
                    <input 
                        id="status"
                        name="status"
                        placeholder="status"
                        autoComplete="off"
                        value={formik.values.status}
                        onChange={formik.handleChange} />
                    </div>
                    <div className={classes.inputBlock}>
                    <span>priority:</span>
                    <input 
                        id="priority"
                        name="priority"
                        placeholder="priority"
                        autoComplete="off"
                        value={formik.values.priority}
                        onChange={formik.handleChange} />
                    </div>
                    <div className={classes.inputBlock}>
                    <span>startDate</span>
                    <input 
                        id="startDate"
                        name="startDate"
                        placeholder="startDate"
                        autoComplete="off"
                        value={formik.values.startDate}
                        onChange={formik.handleChange} />
                    </div>
                    <div className={classes.inputBlock}>
                    <span>deadline:</span>
                    <input 
                        id="deadline"
                        name="deadline"
                        placeholder="deadline"
                        autoComplete="off"
                        value={formik.values.deadline}
                        onChange={formik.handleChange} />
                    </div>
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