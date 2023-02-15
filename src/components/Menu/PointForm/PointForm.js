import { Button, OutlinedInput } from "@mui/material";
import { useFormik } from "formik";
import classes from "./PointForm.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function PointForm(props) {

    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(213, 68, 116)',
                darker: '#053e85',
            },
            neutral: {
                main: 'rgb(51,52,54)',
                contrastText: '#fff',
            },
        },
    });

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
                <div className={classes.newPointInput}>
                    <OutlinedInput
                        fullWidth
                        id="newPointText"
                        name="newPointText"
                        placeholder="add new things to do..."
                        autoComplete="off"
                        value={formik.values.newPointText}
                        onChange={formik.handleChange}></OutlinedInput>
                </div>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" size="large" type="submit">new todo</Button>
                </ThemeProvider>
            </form>

        </div>
    )
}
export default PointForm;