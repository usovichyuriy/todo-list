import TaskListForm from "./TaskListForm/TaskListForm";
import classes from "./Menu.module.css";
import TaskListContainer from "./TaskList/TaskListContainer";

function Menu(props) {
  let currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let taskLists = props.taskLists.map((taskList) => {
    return (
      <TaskListContainer
        id={taskList.id}
        title={taskList.title}
        addedDate={taskList.addedDate}
        order={taskList.order}
      />
    );
  });

  return (
    <div className={classes.menu}>
      <div className={classes.date}>
        {currentDate.toLocaleDateString(undefined, options)}
      </div>
      <TaskListForm addNewTaskList={props.addNewTaskList} />
      <h4>my lists:</h4>
      <div>{taskLists}</div>
    </div>
  );
}
export default Menu;
