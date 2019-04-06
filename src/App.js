import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import SetName from "./pages/SetName";
import SetDate from "./pages/SetDate";
import SetAttendees from "./pages/SetAttendees";
import ViewEvent from "./pages/ViewEvent";
import Home from "./pages/Home";

function AppRouter() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Toolbar style={{ padding: 16 }}>
        <img
          src="/eventually.png"
          alt="The logo for team eVentually"
          style={{ height: 96 }}
        />
        <span style={{ flexGrow: 1 }} />
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/"
          style={{ fontWeight: 700, marginLeft: 16, color: "white" }}
        >
          Home
        </Button>

        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/create"
          style={{ fontWeight: 700, marginLeft: 16, color: "white" }}
        >
          Create
        </Button>
      </Toolbar>
      <div style={{ height: "100vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={SetName} />
          <Route path="/create/date" exact component={SetDate} />
          <Route path="/create/attendees" exact component={SetAttendees} />
          <Route path="/view/:eventId" component={ViewEvent} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRouter;
