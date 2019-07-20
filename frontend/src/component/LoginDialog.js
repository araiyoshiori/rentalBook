import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

class LoginDialog extends Component {
  state = {
    open: false,
    loginData: {
      email: "",
      password: ""
    }
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleExe = () => {
    const loginData = this.state.loginData;
    this.props.exeLogin(loginData);
  };
  handleClose = () => {
    this.setState({ open: false });
    this.props.storeErrorAction(false);
  };
  setLoginData = item => event => {
    let loginData = this.state.loginData;
    loginData[item] = event.target.value;
    this.setState({ loginData: loginData });
  };
  render() {
    const { classes } = this.props;
    // todo
    // メッセージはreduserに移動したい
    let errorMessage = this.props.error
      ? "※メールアドレスまたはパスワードが正しくありません。"
      : "";
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          <Typography color="secondary">ログイン</Typography>
        </Button>
        <Dialog
          open={this.state.open && this.props.user === ""}
          onClose={this.handleClose}
        >
          <DialogTitle className={classes.dialogTitle}>ログイン</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <TextField
              label="メールアドレス"
              type="email"
              color="primary"
              className={classes.textField}
              autoFocus
              onChange={this.setLoginData("email")}
            />
            <TextField
              label="Password"
              type="password"
              color="primary"
              className={classes.textField}
              autoComplete="current-password"
              onChange={this.setLoginData("password")}
            />
            <Typography color="error" className={classes.error}>
              {errorMessage}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClose}
            >
              <Typography color="secondary" className={classes.button}>
                戻る
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleExe}
            >
              <Typography color="secondary" className={classes.button}>
                実行
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styles = theme => ({
  dialogTitle: {
    background: "#009688",
    color: "white"
  },
  title: {
    color: theme.palette.primary.main
  },
  textField: {
    marginTop: theme.spacing.unit * 3,
    width: 280
  },
  button: {
    width: 70
  },
  error: {
    marginTop: theme.spacing.unit * 2
  },
  dialogContent: {
    width: 300
  }
});
export default withStyles(styles)(LoginDialog);
