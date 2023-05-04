import { connect } from "react-redux";
import { logoutUser } from "../../redux/authReducer";
import Header from "./Header";

let mapStateToProps = (store) => {
  return {
    isAuth: store.auth.isAuth,
  };
};

const HeaderContainer = (props) => {
  return (
    <div>
      <Header {...props} />
    </div>
  );
};
export default connect(mapStateToProps, { logoutUser })(HeaderContainer);
