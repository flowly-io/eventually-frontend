import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { AppBar, Typography, Toolbar } from "@material-ui/core";

import CreateEvent from "./pages/Create";
import ViewEvent from "./pages/View";

function Home() {
  return <h2>Home</h2>;
}

function AppRouter() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar color="primary" position="sticky">
        <Toolbar style={{ padding: 16 }}>
          <Typography variant="h3" style={{ color: "white", flexGrow: 1 }}>
            eVentually
          </Typography>
          <Link
            to="/"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            Home
          </Link>

          <Link
            to="/create"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            Create
          </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateEvent} />
        <Route path="/view" component={ViewEvent} />
      </Switch>
    </div>
  );
}

export default AppRouter;
