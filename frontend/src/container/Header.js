import { connect } from "react-redux";
import Header from "../component/Header";

import { storeUserAction } from "../Action";

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = dispatch => {
  return {
    storeUserAction(value) {
      dispatch(storeUserAction(value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
