import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Menu from "./Menu";

let mapStateToProps = (store) => {
    return {
        taskLists: store.taskLists.data
    }
}
const MenuContainer = (props) => {
    return (
        <div>
            <Menu {...props} />
        </div>
    )
}
export default compose(connect(mapStateToProps, {}), withAuthRedirect)(MenuContainer);