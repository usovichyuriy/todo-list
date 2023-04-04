import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getTaskLists } from "../../redux/taskListReducer";
import Menu from "./Menu";

let mapStateToProps = (store) => {
    return {
        taskLists: store.taskLists.data
    }
}
const MenuContainer = (props) => {

    useEffect(() => {
        props.getTaskLists();
    }, [])

    return (
        <div>
            <Menu {...props} />
        </div>
    )
}
export default compose(connect(mapStateToProps, { getTaskLists }), withAuthRedirect)(MenuContainer);