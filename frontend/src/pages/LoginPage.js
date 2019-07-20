import React, { Component } from 'react'
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardActions,
  Divider,
  Fab,
  Grid, 
  TextField, 
  Modal,
  Typography,
  Button
} from '@material-ui/core'

import Link from '@material-ui/core/Link'

import { withStyles } from '@material-ui/core/styles'

function getModalStyle() {
  const top = 17;
  const left = window.innerWidth/2;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    position:"absolute",
  };
}
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
})

class LoginPage extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props
    return (
      <Grid container
        direction="column"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Card>
            <CardHeader title={<Typography><Link target="_blank" href="https://material-ui.com/style/links/">ログイン</Link></Typography>} />
            <Divider />
            <CardContent>
              <Grid 
                container 
                spacing={24}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} style={{textAlign: 'center', margin: 15}}>
                  <TextField
                    required
                    label="名前"
                  />
                </Grid>
                <Grid item xs={12} style={{textAlign: 'center', marginBottom: 30}}>
                  <TextField
                    required
                    type="password"
                    label="パスワード"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
                <Grid item xs={12} style={{textAlign: 'center', margin: 15}}>
                  <Fab variant="extended" color="primary" aria-label="login" onClick={this.handleOpen}>
                    ログイン
                  </Fab>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={this.handleClose}>終了</Button>
          </div>
        </Modal>
                </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  }
}
export default withStyles(styles)(LoginPage);

