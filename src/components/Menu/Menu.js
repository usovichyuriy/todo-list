import TaskListForm from "./TaskListForm/TaskListForm";
import classes from "./Menu.module.css";
import TaskListContainer from "./TaskList/TaskListContainer";

function Menu(props) {

    let taskLists = props.taskLists.map(taskList => {
        return <TaskListContainer id={taskList.id} title={taskList.title} />
    })

    return (
        <div className={classes.menu}>
            <p>Menu page</p>
            <TaskListForm addNewTaskList={props.addNewTaskList} />
            <div>
                {taskLists}
            </div>
        </div>
    )
}
export default Menu;