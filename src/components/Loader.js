import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader(props) {
  const { text, size } = props;
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <CircularProgress size={size} />
      {text ? <h2>{text}</h2> : null}
    </div>
  );
}
