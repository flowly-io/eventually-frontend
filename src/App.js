import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import { AppBar, Typography, Toolbar, Button} from "@material-ui/core";

import CreateEvent from "./pages/Create";
import EventOverviewCard from "./EventOverviewCard";

function Home() {
    return <DummyEvents />;
}

function DummyEvents() {
    const events = [
        {
            "name": "Some other event",
            "organisers": [
                {
                    "firstname": "Ben",
                    "lastname": "Yap"
                },
                {
                    "firstname": "Mariusz",
                    "lastname": "Skoneczko"
                }
            ],
            "startDateTime": "Wed 6 April, 9:30am",
            "endDateTime": "Wed 7 April, 3:30pm"
        },
        {
            "name": "WIRED games night",
            "organisers": [
                {
                    "firstname": "Eric",
                    "lastname": "Jiang"
                }
            ],
            "startDateTime": "Wed 10 April, 6:30pm",
            "endDateTime": "Wed 10 April, 8:30pm"
        }
    ];

    return events.map(event =>
                      <EventOverviewCard event={event} />
    );

}

function AppRouter() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar color="primary" position="sticky">
        <Toolbar style={{ padding: 16 }}>
          <Typography variant="h3" style={{ color: "white", flexGrow: 1 }}>
            eVentually
          </Typography>
          <Button component={Link}
            to="/"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            Home
          </Button>

          <Button component={Link}
            to="/create"
            style={{ fontWeight: 700, paddingLeft: 16, color: "white" }}
          >
            Create
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={CreateEvent} />
      </Switch>
    </div>
  );
}

export default AppRouter;
