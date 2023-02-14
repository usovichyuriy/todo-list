import { Button, OutlinedInput } from "@mui/material";
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
                    <OutlinedInput
                        fullWidth
                        id="newPointText"
                        name="newPointText"
                        autoComplete="off"
                        value={formik.values.newPointText}
                        onChange={formik.handleChange}></OutlinedInput>
                </div>
                <Button variant="contained" size="large" type="submit">new todo</Button>
            </form>

        </div>
    )
}
export default PointForm;