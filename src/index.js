import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";

import GraphqlClient from "./config/graphql";
import { ApolloProvider } from "react-apollo";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import history from "./config/history";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff5b83",
      main: "#e31457",
      dark: "#aa002f",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#549be0",
      main: "#006dae",
      dark: "#00437e",
      contrastText: "#ffffff"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontSize: 32
      },
      formControl: { width: "100%", paddingTop: 16 }
    },
    MuiInputLabel: {
      root: { fontSize: 32 }
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={GraphqlClient}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router history={history}>
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
