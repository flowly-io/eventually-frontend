import React from "react";
import { Query } from "react-apollo";

import { GET_MY_PROFILE } from "../queries/profile";
import {
  CircularProgress,
  Card,
  CardContent,
  CardHeader,
  Avatar
} from "@material-ui/core";
import getIcon from "../util/groups";

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
            const { me } = data;
            const { firstname, lastname, email, groups } = me;
            return (
              <div>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="account avatar">{`${firstname[0]}${
                        lastname[0]
                      }`}</Avatar>
                    }
                    title={`${firstname} ${lastname}`}
                    subheader={email}
                  />
                  <CardContent>
                    <h3>My assigned groups</h3>
                    {groups.map((group, i) => {
                      return <div key={i}>{getIcon(group)}</div>;
                    })}
                  </CardContent>
                </Card>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Profile;
