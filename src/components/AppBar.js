import React from "react";
import { withRouter, Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function AppBar({ location }) {
  const buttonStyles = {
    fontWeight: 700,
    margin: 16,
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
        style={buttonStyles}
      >
        Home
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/create"
        style={buttonStyles}
      >
        Create
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/profile"
        style={buttonStyles}
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
        style={buttonStyles}
      >
        Home
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/admin"
        style={buttonStyles}
      >
        Admin home
      </Button>
      <Button
        color="primary"
        variant="contained"
        component={Link}
        to="/admin/capabilities"
        style={buttonStyles}
      >
        Capabilities
      </Button>
    </>
  );

  return (
    <Toolbar
      style={{ padding: 16, flexDirection: "column", alignItems: "center" }}
    >
      <Link to="/">
        <img
          style={{ animation: "animate-logo 2s", height: 128 }}
          src="/eventually.png"
          alt="The logo for team eVentually"
        />
      </Link>
      <div>{location.pathname.indexOf("/admin") ? buttons : adminButtons}</div>
    </Toolbar>
  );
}

export default withRouter(AppBar);
