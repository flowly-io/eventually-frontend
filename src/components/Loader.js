import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader() {
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
      <CircularProgress size={100} />
      <h2>Loading your events...</h2>
    </div>
  );
}
