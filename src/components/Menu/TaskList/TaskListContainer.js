import { connect } from "react-redux";
import { compose } from "redux";
import TaskList from "./TaskList";
import { deleteTaskList, editTaskListTitle, getTasksForList } from "../../../redux/taskListReducer";
import { useEffect } from "react";

let mapStateToProps = (store) => {
    return {
        tasks: store.taskLists.items
    }
}

const TaskListContainer = (props) => {

    useEffect(() => {
        props.getTasksForList(props.id);
    }, [])

    return (
        <div>
            <TaskList {...props} />
        </div>
    )
}
export default compose(connect(mapStateToProps, { deleteTaskList, editTaskListTitle, getTasksForList }))(TaskListContainer);