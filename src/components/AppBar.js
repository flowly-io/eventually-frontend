import React from "react";
import { withRouter, Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function AppBar({ location }) {
  const styles = {
    fontWeight: 700,
    marginLeft: 8,
    color: "white",
    padding: "1rem 2rem",
    fontSize: "1.5rem"
  };
  const buttons = (
    <>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/"
        style={styles}
      >
        Home
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/create"
        style={styles}
      >
        Create
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/profile"
        style={styles}
      >
        My Profile
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
    <Toolbar style={{ padding: 16, justifyContent: "space-between" }}>
      <Link to="/">
        <img
          src="/eventually.png"
          alt="The logo for team eVentually"
          style={{ height: 96 }}
        />
      </Link>
      <span style={{ flexGrow: 1 }} />
      {location.pathname.indexOf("/admin") ? buttons : adminButtons}
    </Toolbar>
  );
}

export default withRouter(AppBar);
