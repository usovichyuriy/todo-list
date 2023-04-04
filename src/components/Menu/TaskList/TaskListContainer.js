import { connect } from "react-redux";
import { compose } from "redux";
import TaskList from "./TaskList";
import { deleteTaskList, editTaskListTitle } from "../../../redux/taskListReducer";

let mapStateToProps = (store) => {
    return {
        tasks: store.taskLists.items
    }
}

const TaskListContainer = (props) => {
    return (
        <div>
            <TaskList {...props} />
        </div>
    )
}
export default compose(connect(mapStateToProps, { deleteTaskList, editTaskListTitle }))(TaskListContainer);