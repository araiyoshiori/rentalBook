import { connect } from "react-redux";
import LoginDialog from "../component/LoginDialog";

import { exeLoginAction, storeErrorAction } from "../Action";

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    exeLogin(loginData) {
      dispatch(exeLoginAction(loginData));
    },
    storeErrorAction(value) {
      dispatch(storeErrorAction(value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog);
