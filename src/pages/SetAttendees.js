import React from "react";
import { Paper, FormControl, InputLabel, Input } from "@material-ui/core";

export default class SetAttendees extends React.Component {
  state = {
    capacity: undefined,
    audiences: []
  };

  render() {
    const { capacity } = this.state;
    return (
      <Paper>
        <FormControl>
          <InputLabel>How many attendees are you expecting?</InputLabel>
          <Input
            value={capacity}
            onClick={e => this.setState({ capacity: e.target.value })}
          />
        </FormControl>
      </Paper>
    );
  }
}
