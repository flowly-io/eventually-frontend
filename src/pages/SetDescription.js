import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import history from "../config/history";
import * as formStore from "../formStore";

export default class SetDescription extends React.Component {
  descriptionRef = React.createRef();

  nextPage = () => {
    if (this.descriptionRef.current.value !== "") {
      formStore.setDescription(this.descriptionRef.current.value);
      history.push("/create/date");
    }
  };

  componentDidMount() {
    this.descriptionRef.current.value = formStore.store.description || "";
    this.descriptionRef.current.focus();
  }

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
          What is the purpose of your event?
        </Typography>
        <TextField
          inputRef={this.descriptionRef}
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
