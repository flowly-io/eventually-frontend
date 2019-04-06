import React from "react";
import { Query } from "react-apollo";

import EventOverviewCard from "../components/EventOverviewCard";

// GraphQL Quries
import { GET_EVENTS_BY_ME } from "../queries/events";
import { CircularProgress } from "@material-ui/core";

function Home() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Query query={GET_EVENTS_BY_ME}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <CircularProgress size={100} />
                <h2>Loading your events...</h2>
              </div>
            );
          if (error) return `Error! ${error.message}`;
          const { eventsByMe } = data;
          console.log(data, eventsByMe);
          return eventsByMe.map((event, key) => (
            <EventOverviewCard event={event} key={key} />
          ));
        }}
      </Query>
    </div>
  );
}

export default Home;
