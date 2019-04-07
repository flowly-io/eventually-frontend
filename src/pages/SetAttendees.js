import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import * as formStore from "../formStore";
import history from "../config/history";
import { CREATE_EVENT } from "../queries/events";
import { Mutation } from "react-apollo";

class SetAttendees extends React.Component {
  attendeeRef = React.createRef();

  componentDidMount() {
    this.attendeeRef.current.value = "1";
    this.attendeeRef.current.focus();
  }

  nextPage = async () => {
    const number = Number(this.attendeeRef.current.value);
    if (!Number.isNaN(number) && number > 0) {
      formStore.setAudiences(number);
      await this.props.createEvent({ variables: { event: formStore.store } });
      history.push("/");
    }
  };

  render() {
    return (
      <div
        className="fancy-render-animation"
        style={{
          maxWidth: "60vw",
          minWidth: 300,
          margin: "0 auto",
          paddingTop: "10vh"
        }}
      >
        <Typography variant="h3" style={{ fontWeight: 400 }}>
          How many people will be attending?
        </Typography>
        <TextField
          inputRef={this.attendeeRef}
          style={{ margin: "32px 0", display: "block", width: "100%" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.nextPage}
          style={{ padding: "24px 48px", fontSize: 24 }}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default () => (
  <Mutation mutation={CREATE_EVENT}>
    {createEvent => <SetAttendees createEvent={createEvent} />}
  </Mutation>
);
