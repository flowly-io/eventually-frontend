import React from "react";
import { withRouter, Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function AppBar({ location }) {
  const buttons = (
    <>
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
    </>
  );

  const adminButtons = (
    <>
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
        to="/admin"
        style={{ fontWeight: 700, marginLeft: 16, color: "white" }}
      >
        Admin home
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/admin/capabilities"
        style={{ fontWeight: 700, marginLeft: 16, color: "white" }}
      >
        Capabilities
      </Button>
    </>
  );

  return (
    <Toolbar style={{ padding: 16 }}>
      <img
        src="/eventually.png"
        alt="The logo for team eVentually"
        style={{ height: 96 }}
      />
      <span style={{ flexGrow: 1 }} />
      {location.pathname.indexOf("/admin") ? buttons : adminButtons}
    </Toolbar>
  );
}

export default withRouter(AppBar);
