import Menu from "./Menu";
import { connect } from "react-redux";

let mapStateToProps = (store) => {
    return {
        menuPage: store
    }
}

const MenuContainer = connect(mapStateToProps)(Menu);
export default MenuContainer;