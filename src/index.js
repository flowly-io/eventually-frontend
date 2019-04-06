import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";

import { client } from "./config/graphql";
import { ApolloProvider } from "react-apollo";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#51c449",
      main: "#029216",
      dark: "#aa002f",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#51c449",
      main: "#006dae",
      dark: "#006300",
      contrastText: "#ffffff"
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router>
          <App />
        </Router>
      </MuiPickersUtilsProvider>
    </ApolloProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
