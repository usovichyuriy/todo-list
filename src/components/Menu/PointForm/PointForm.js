import { useFormik } from "formik";
import classes from "./PointForm.module.css";

function PointForm(props) {

    const formik = useFormik({
        initialValues: {
            newPointText: ''
        },

        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.updateNewPointText(formData.newPointText);
                props.addPoint();
                formik.values.newPointText = '';
                setSubmitting(false);
            }, 400)
        }
    });

    return (
        <div className={classes.pointForm}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        id="newPointText"
                        name="newPointText"
                        value={formik.values.newPointText}
                        onChange={formik.handleChange}></input>
                </div>
                <button type="submit">new todo</button>
            </form>

        </div>
    )
}
export default PointForm;