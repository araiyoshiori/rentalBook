import { connect } from "react-redux";
import BookList from "../component/BookList";

import { exeDisplayBookListAction, exeUpdateBookStateAction } from "../Action";

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = dispatch => {
  return {
    displayBook() {
      dispatch(exeDisplayBookListAction());
    },
    updateBookState(selected) {
      dispatch(exeUpdateBookStateAction(selected));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
