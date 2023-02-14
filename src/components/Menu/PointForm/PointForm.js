import { useFormik } from "formik";

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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="newPointText"
                    name="newPointText"
                    value={formik.values.newPointText}
                    onChange={formik.handleChange}></input>
                <button type="submit">add</button>
            </form>

        </div>
    )
}
export default PointForm;