import TaskListForm from "./TaskListForm/TaskListForm";
import classes from "./Menu.module.css";
import TaskListContainer from "./TaskList/TaskListContainer";

function Menu(props) {

    let taskLists = props.taskLists.map(taskList => {
        return <TaskListContainer title={taskList.title} />
    })

    return (
        <div className={classes.menu}>
            <p>Menu page</p>
            <TaskListForm />
            <div>
                {taskLists}
            </div>
        </div>
    )
}
export default Menu;