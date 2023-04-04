import { useFormik } from "formik";
import classes from "./EditTaskListForm.module.css";

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
                props.deactivateEditMode();
            }, 400)
        }
    })
    return (
        <div className={classes.editTaskListForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.editTaskListInput}>
                    <input id="title"
                        name="title"
                        autoComplete="off"
                        value={formik.values.title}
                        onChange={formik.handleChange} />
                </div>
                <div className={classes.editTaskListButtons}>
                    <button type="submit">save</button>
                    <button onClick={props.deactivateEditMode}>exit</button>
                </div>
            </form>
        </div>
    )
}
export default EditTaskListForm;