import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { exeDisplayBookListAction, exeUpdateBookStateAction } from "../Action";

class RootPage extends Component {
  state = {
    selected: [],
    expanded: true
  };

  componentWillMount() {
    this.props.displayBook();
  }

  update = () => {
    let { selected } = this.state;
    this.props.updateBookState(selected);
    this.setState({ selected: [] });
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClick = (event, row) => {
    // 選択データ取得
    const { selected } = this.state;
    let isBook = false;
    // 選択データ内に該当データが存在するかチェック
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].id === row.id) {
        // 存在した場合、除去する
        selected.splice(i, 1);
        isBook = true;
        break;
      }
    }
    // 存在しない場合、追加する
    if (!isBook) {
      selected.push(row);
    }
    this.setState({ selected: selected });
  };

  isSelected = id => {
    let result = false;
    const { selected } = this.state;
    for (let i = 0; i < selected.length; i++) {
      if (selected[i].id === id) {
        result = true;
        break;
      }
    }

    return result;
  };

  render() {
    const { classes, bookList } = this.props;
    return (
      <div>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.root}>
            <div>
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.update}
              >
                {" "}
                貸出／返却{" "}
              </Button>
            </div>
            <div className={classes.scrollTable}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>選択</TableCell>
                    <TableCell align="left">状況</TableCell>
                    <TableCell align="left">タイトル</TableCell>
                    <TableCell align="left">画像</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookList.map(row => {
                    const isSelected = this.isSelected(row.id);
                    return (
                      <TableRow
                        key={row.id}
                        onClick={event => this.handleClick(event, row)}
                      >
                        <TableCell>
                          <Checkbox checked={isSelected} />
                        </TableCell>
                        <TableCell paddingNone align="left">
                          {row.status === "1" ? "貸出中　" : "貸出ＯＫ"}
                        </TableCell>
                        <TableCell align="left">{row.title}</TableCell>
                        <TableCell>
                          <CardMedia
                            className={classes.media}
                            image={row.smallThumbnail}
                            title="Paella dish"
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Paper>
        </Collapse>
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.handleExpandClick}
          >
            {this.state.expanded ? "非表示" : "表示"}
          </Button>
        </div>
        <IconButton
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  },
  table: {
    minWidth: 500
  },
  button: {
    margin: theme.spacing.unit
  },
  media: {
    position: "sticky",
    height: 60,
    width: 45
  },
  scrollTable: {
    overflow: "auto"
  },
  aaaa: {
    position: "sticky",
    left: 0,
    zIndex: 1
  }
});

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

const syt = withStyles(styles)(RootPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(syt);
