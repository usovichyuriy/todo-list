import { useFormik } from "formik";
import classes from "./TaskListForm.module.css";
import {
  Button,
  OutlinedInput,
  ThemeProvider,
  createTheme,
} from "@mui/material";

function TaskListForm(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (formData, { setSubmitting }) => {
      setTimeout(() => {
        props.addNewTaskList(formData);
        formik.values.title = "";
        setSubmitting(false);
      }, 400);
    },
  });

  const taskListFormTheme = createTheme({
    palette: {
      primary: {
        main: "rgb(213, 68, 116)",
      },
    },
  });

  return (
    <div className={classes.taskListForm}>
      <form onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={taskListFormTheme}>
          <div className={classes.newTaskListInput}>
            <OutlinedInput
              fullWidth
              id="title"
              name="title"
              placeholder="add new todo list"
              autoComplete="off"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          <div className={classes.newTaskListButton}>
            <Button variant="contained" type="submit">
              new todo list
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </div>
  );
}
export default TaskListForm;
