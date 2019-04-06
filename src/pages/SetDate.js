import React from "react";
import {
  Card,
  CardContent,
  DialogContentText,
  Button
} from "@material-ui/core";
import { DateTimePicker } from "material-ui-pickers";
import moment from "moment";
import * as formStore from "../formStore";
import history from "../config/history";

export default class SetDate extends React.Component {
  state = {
    startDate: formStore.store.startDate
      ? new moment(formStore.store.startDate, moment.ISO_8601)
      : new moment(),
    endDate: formStore.store.endDate
      ? new moment(formStore.store.endDate, moment.ISO_8601)
      : new moment()
  };

  nextPage = () => {
    formStore.setDates(this.state.startDate, this.state.endDate);
    history.push("/create/capabilities");
  };

  render() {
    const { startDate, endDate } = this.state;
    const eventDuration = endDate.diff(startDate, "hours");

    return (
      <div
        style={{
          maxWidth: "50vw",
          minWidth: 300,
          margin: "0 auto",
          paddingTop: "10vh"
        }}
      >
        <Card>
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <DateTimePicker
              value={startDate}
              disablePast
              onChange={val => this.setState({ startDate: val, endDate: val })}
              label="Start date"
              showTodayButton
              style={{ margin: "0 0 32px" }}
            />
            <DateTimePicker
              value={endDate}
              disablePast
              onChange={val => this.setState({ endDate: val })}
              label="End date"
              minDate={startDate}
              showTodayButton
              style={{ margin: "0 0 32px" }}
            />
            <DialogContentText style={{ fontSize: 36 }}>
              This event will last {eventDuration} hours
            </DialogContentText>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 32, padding: "24px 48px", fontSize: 24 }}
              onClick={this.nextPage}
            >
              Next
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
