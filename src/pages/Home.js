import React from "react";
import { Query } from "react-apollo";

import EventOverviewCard from "../components/EventOverviewCard";

// GraphQL Quries
import { GET_EVENTS_BY_ME } from "../queries/events";
import Loader from "../Loader";

function Home() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Query query={GET_EVENTS_BY_ME}>
        {({ loading, error, data }) => {
          if (loading) return <Loader size={100} text="Loading your events"/>;
          if (error)
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
                <h2>An error has occuredh</h2>
                <b>Error Message: {error.message}</b>
                <pre
                  style={{
                    maxWidth: "80%"
                  }}
                >
                  {error.stack}
                </pre>
              </div>
            );
          const { eventsByMe } = data;
          return eventsByMe.map((event, key) => (
            <EventOverviewCard event={event} key={key} />
          ));
        }}
      </Query>
    </div>
  );
}

export default Home;
