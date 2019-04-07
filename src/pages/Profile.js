import React from "react";
import { Query, withApollo } from "react-apollo";

import {
  GET_MY_PROFILE,
  GET_GROUP_CAPABILITIES_AND_INSTANCES
} from "../queries/profile";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Badge from "@material-ui/core/Badge";

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
                  <b>{error.message}</b>
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
            const capabiltyInstances = groups.map((groupName, index) => (
              <Query
                key={index}
                query={GET_GROUP_CAPABILITIES_AND_INSTANCES}
                variables={{ group: groupName }}
              >
                {({ error, data }) => {
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
                        <b>{error.message}</b>
                        <pre
                          style={{
                            maxWidth: "80%"
                          }}
                        >
                          {error.stack}
                        </pre>
                      </div>
                    );
                  const { group } = data;

                  // Collect capabilities
                  if (group && Object.keys(group)) {
                    const capabilities = {};
                    group.capabilities.forEach(
                      c => (capabilities[c.name] = [])
                    );
                    group.capabilityInstances.forEach(c => {
                      capabilities[c.name].push(c);
                    });

                    return (
                      (Object.keys(capabilities).length && (
                        <List>
                          {Object.keys(capabilities).map((key, i) => {
                            const capability = capabilities[key];
                            return (
                              <ListItem
                                button
                                key={`c-${i}`}
                                style={{ marginBottom: "1rem" }}
                              >
                                <Badge
                                  color="secondary"
                                  badgeContent={capability.length}
                                >
                                  <Typography variant="h6">{key}</Typography>
                                </Badge>
                              </ListItem>
                            );
                          })}
                        </List>
                      )) ||
                      null
                    );
                  }
                  return null;
                }}
              </Query>
            ));

            return (
              <>
                <Card style={{ marginBottom: "2rem" }}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="account avatar">{`${firstname[0]}${
                        lastname[0]
                      }`}</Avatar>
                    }
                    title={`Hello, ${firstname} ${lastname}`}
                    subheader={email}
                  />
                </Card>

                <Card style={{ marginBottom: "2rem" }}>
                  <CardContent>
                    <Typography variant="h5" style={{ paddingBottom: "1rem" }}>
                      My assigned groups
                    </Typography>
                    <div style={{ display: "flex" }}>
                      {groups.map((group, i) => {
                        return <div key={i}>{getIcon(group)}</div>;
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card style={{ marginBottom: "2rem" }}>
                  <CardContent>
                    <Typography variant="h5" style={{ paddingBottom: "1rem" }}>
                      My capabilities
                    </Typography>
                    {capabiltyInstances}
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

export default withApollo(Profile);
