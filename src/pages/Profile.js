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
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          maxWidth: "50rem"
        }}
      >
        <Query query={GET_MY_PROFILE}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <CircularProgress size={100} />
                  <h2>Loading your profile...</h2>
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
                  <h2>An error has occured</h2>
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
            const { me } = data;
            const { firstname, lastname, email, groups } = me;
            return (
              <>
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
                    <div style={{ display: "flex" }}>
                      {groups.map((group, i) => {
                        return <div key={i}>{getIcon(group)}</div>;
                      })}
                    </div>
                  </CardContent>
                </Card>
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Profile;
