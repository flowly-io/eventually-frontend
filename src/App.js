import React from "react";
import { Route, Switch } from "react-router-dom";

import AppBar from "./components/AppBar";

import SetName from "./pages/SetName";
import SetDate from "./pages/SetDate";
import SetAttendees from "./pages/SetAttendees";
import ViewEvent from "./pages/ViewEvent";
import ViewAllEvents from "./pages/ViewAllEvents";
import Home from "./pages/Home";
import SetDescription from "./pages/SetDescription";
import Profile from "./pages/Profile";

import Admin from "./pages/admin/Admin";
import CreateCapability from "./pages/admin/CreateCapability";

function AppRouter() {
  return (
    <div style={{ height: "100vh" }}>
      <AppBar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          minWidth: "60%"
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/create" exact component={SetName} />
          <Route path="/create/description" exact component={SetDescription} />
          <Route path="/create/date" exact component={SetDate} />
          <Route path="/create/attendees" exact component={SetAttendees} />
          <Route path="/events" exact component={ViewAllEvents} />
          <Route path="/events/:id" component={ViewEvent} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/createCapability" component={CreateCapability} />
        </Switch>
      </div>
    </div>
  );
}

export default AppRouter;
