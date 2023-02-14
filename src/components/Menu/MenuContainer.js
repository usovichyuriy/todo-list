import Menu from "./Menu";
import { connect } from "react-redux";
import { addPointActionCreator, deletePointActionCreator, updateNewPointTextActionCreator } from "../../redux/point-reducer";

let mapStateToProps = (store) => {
    return {
        menuPage: store
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPoint: () => {
            dispatch(addPointActionCreator());
        },
        updateNewPointText: (text) => {
            dispatch(updateNewPointTextActionCreator(text));
        },
        deletePoint: (text) => {
            dispatch(deletePointActionCreator(text));
        }
    }
}
const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;