import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import history from "../config/history";
import * as formStore from "../formStore";

export default class SetDate extends React.Component {
  nameRef = React.createRef();

  nextPage = () => {
    if (this.nameRef.current.value !== "") {
      formStore.setName(this.nameRef.current.value);
      history.push("/create/date");
    }
  };

  componentDidMount() {
    this.nameRef.current.value = formStore.store.name | "";
  }

  render() {
    return (
      <div
        style={{
          maxWidth: "60vw",
          minWidth: 300,
          margin: "0 auto",
          paddingTop: "10vh"
        }}
      >
        <Typography variant="h3" style={{ fontWeight: 400 }}>
          What is your event name?
        </Typography>
        <TextField
          inputRef={this.nameRef}
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
