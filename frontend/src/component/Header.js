import React, { Component } from "react";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@material-ui/core/";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import LoginDialog from "../container/LoginDialog";

class Header extends Component {
  state = {
    anchorEl: undefined,
    open: false
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
    this.setState({ open: true });
  };
  handleMenuClose = () => {
    this.setState({ open: false });
  };
  handleClose = () => {
    this.setState({ open: false });
    this.props.storeUserAction([""]);
  };
  render() {
    const { classes } = this.props;

    console.log("header", this.props.user);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h4" color="secondary" className={classes.grow}>
              Rental Book
            </Typography>

            {this.props.user ? (
              <IconButton
                aria-owns={this.state.anchorEl ? "simple-menu" : null}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleProfileMenuOpen}
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <LoginDialog />
            )}
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleClose}>ログアウト</MenuItem>
        </Menu>
      </div>
      // <div className={classes.Header}>Rental Book</div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  grow: {
    flexGrow: 1
  }
  // Header: {
  //   position: "fixed",
  //   top: 0,
  //   left: 0,
  //   width: "100%",
  //   height: "35px",
  //   padding: "10px",
  //   backgroundColor: "#009688",
  //   color: "#000000"
  // }
});

export default withStyles(styles)(Header);
