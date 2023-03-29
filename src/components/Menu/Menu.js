import TaskList from "./TaskList/TaskList";
import TaskListForm from "./TaskListForm/TaskListForm";
import classes from "./Menu.module.css";

function Menu() {
    return (
        <div className={classes.menu}>
            <p>Menu page</p>
            <TaskListForm />
            <TaskList />
        </div>
    )
}
export default Menu;