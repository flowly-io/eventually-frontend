import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { AppBar, Typography, Toolbar } from "@material-ui/core";

import SetName from "./pages/SetName";
import SetDate from "./pages/SetDate";
import SetAttendees from "./pages/SetAttendees";

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
      <div style={{ height: "100vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={SetName} />
          <Route path="/create/date" exact component={SetDate} />
          <Route path="/create/attendees" exact component={SetAttendees} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRouter;
