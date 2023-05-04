import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

let mapStateToPropsForRedirect = (store) => ({
  isAuth: store.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirect = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirect;
};
