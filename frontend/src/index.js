import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import RootPage from "./pages/RootPage";
import LoginPage from "./pages/LoginPage";
import configureStore from "./store";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./asset/theme";
import createHistory from "history/createBrowserHistory";

const store = configureStore();
const history = createHistory();

ReactDOM.render(
  //<App />, document.getElementById('root'));
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <div>
          <Route exact path="/" component={RootPage} />
          <Route exact path="/Login/" component={LoginPage} />
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
