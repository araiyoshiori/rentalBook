import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  CardMedia,
  Checkbox,
  Collapse,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Divider,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  CardHeader,
  TableRow
} from "@material-ui/core/";
import { ExpandLess, ExpandMore } from "@material-ui/icons/";
import { contents } from "./contents";

class BookList extends Component {
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
    const { classes, bookList, user, history } = this.props;
    console.log("history", history);
    return (
      <div>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.root}>
            <div className={classes.scrollTable}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {user === "" ? (
                        ""
                      ) : (
                        <Button
                          variant="contained"
                          className={classes.button}
                          color="primary"
                          onClick={this.update}
                        >
                          {" "}
                          貸出／返却{" "}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="left">タイトル</TableCell>
                    <TableCell align="left">画像</TableCell>
                    <TableCell align="left">状況</TableCell>
                    <TableCell align="left">借りた人</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookList.map(row => {
                    const isSelected = this.isSelected(row.id);
                    console.log("row", row);
                    return (
                      <TableRow
                        key={row.id}
                        onClick={event => this.handleClick(event, row)}
                      >
                        <TableCell>
                          <Checkbox checked={isSelected} color="primary" />
                        </TableCell>
                        <TableCell align="left">{row.title}</TableCell>
                        <TableCell>
                          <CardMedia
                            className={classes.media}
                            image={row.smallThumbnail}
                            title="Paella dish"
                          />
                        </TableCell>
                        <TableCell align="left">
                          {row.status === "1" ? "貸出中　" : "貸出ＯＫ"}
                        </TableCell>
                        <TableCell align="left">
                          {row.UserData ? row.UserData[0].fullName : ""}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </Paper>
        </Collapse>
        <contents />
        <div>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.handleExpandClick}
          >
            {this.state.expanded ? "非表示" : "表示"}
          </Button>
          <Button variant="contained" className={classes.button}>
            history
          </Button>
        </div>
        <IconButton
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
        <Paper className={classes.paper2}>
          <Grid container direction="row" spacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={classes.gridItem}
              alignContent="space-between"
            >
              <Card className={classes.card}>
                <CardActionArea
                  onClick={() =>
                    (window.location.href = "https://www.google.com/")
                  }
                >
                  <CardHeader
                    className={classes.cardHead}
                    title={<Link className={classes.link}>Google</Link>}
                  />
                  <Divider />
                  <CardContent className={classes.cardContent}>
                    ああああああああああああああああああああああああ
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  onClick={() =>
                    (window.location.href = "https://www.yahoo.co.jp/")
                  }
                >
                  <CardHeader
                    className={classes.cardHead}
                    title={<Link className={classes.link}>Yahoo</Link>}
                  />
                  <Divider />
                  <CardContent className={classes.cardContent}>
                    いいいいいいいいいいいいいいいいいいいいいいいいい
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  onClick={() =>
                    (window.location.href = "https://www.goo.ne.jp/")
                  }
                >
                  <CardHeader
                    className={classes.cardHead}
                    title={<Link className={classes.link}>Goo</Link>}
                  />
                  <Divider />
                  <CardContent className={classes.cardContent}>
                    ううううううううううううううううううううううううう
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  onClick={() =>
                    (window.location.href = "https://www.bing.com/")
                  }
                >
                  <CardHeader
                    className={classes.cardHead}
                    title={<Link className={classes.link}>Bing</Link>}
                  />
                  <Divider />
                  <CardContent className={classes.cardContent}>
                    えええええええええええええええええええええええええ
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Paper>
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
  card: {
    height: 300,
    alignContent: "center"
  },
  cardHead: {
    height: 20,
    textAlign: "center"
  },
  link: {
    fontSize: 20
  },
  cardContent: {
    height: 280
  },
  paper2: {
    padding: 25
  }
});

export default withStyles(styles)(BookList);
