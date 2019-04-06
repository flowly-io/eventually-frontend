import React from "react";
import { Query } from "react-apollo";

import { GET_MY_PROFILE } from "../queries/profile";
import { CircularProgress } from "@material-ui/core";

class Profile extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Query query={GET_MY_PROFILE}>
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
            console.log(data);
          }}
        </Query>
      </div>
    );
  }
}

export default Profile;
