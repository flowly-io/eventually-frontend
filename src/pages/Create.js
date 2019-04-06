import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { DateTimePicker } from "material-ui-pickers";
import moment from "moment";

class CreateEvent extends React.Component {
  state = {
    name: "",
    fromDateTime: new moment(),
    toDateTime: new moment()
  };
  render() {
    const { name, fromDateTime, toDateTime } = this.state;
    const eventDuration = toDateTime.diff(fromDateTime, "hours");
    return (
      <div style={{ padding: 10 }}>
        <Card>
          <CardHeader title="Create an event" />
          <CardContent>
            <TextField
              id="event-name"
              label="Name"
              value={name}
              onChange={e => {
                this.setState({
                  name: e.target.value
                });
              }}
              margin="normal"
              style={{ width: "100%" }}
            />
            <DateTimePicker
              value={fromDateTime}
              disablePast
              onChange={val =>
                this.setState({ fromDateTime: val, toDateTime: val })
              }
              label="Event Start"
              showTodayButton
            />
            <DateTimePicker
              value={toDateTime}
              disablePast
              onChange={val => this.setState({ toDateTime: val })}
              label="Event End"
              minDate={fromDateTime}
              showTodayButton
            />
            {`Event Duration: ${eventDuration} hours`}
          </CardContent>
        </Card>
        <div />
      </div>
    );
  }
}

export default CreateEvent;
