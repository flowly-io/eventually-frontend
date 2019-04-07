import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import SetName from "./pages/SetName";
import SetDate from "./pages/SetDate";
import SetAttendees from "./pages/SetAttendees";
import ViewEvent from "./pages/ViewEvent";
import ViewAllEvents from "./pages/ViewAllEvents";
import Home from "./pages/Home";
import SetDescription from "./pages/SetDescription";

function AppRouter() {
  return (
    <div
      style={{
        height: "100vh"
      }}
    >
      <Toolbar style={{ padding: 16, justifyContent: "space-between" }}>
        <Link to="/">
          <img
            src="/eventually.png"
            alt="The logo for team eVentually"
            style={{ height: 96 }}
          />
        </Link>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/create"
          style={{
            fontWeight: 700,
            marginLeft: 16,
            color: "white",
            padding: "24px 64px"
          }}
        >
          Create
        </Button>
      </Toolbar>
      <div style={{ height: "100vh" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={SetName} />
          <Route path="/create/description" exact component={SetDescription} />
          <Route path="/create/date" exact component={SetDate} />
          <Route path="/create/attendees" exact component={SetAttendees} />
          <Route path="/events" exact component={ViewAllEvents} />
          <Route path="/events/:id" component={ViewEvent} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRouter;
