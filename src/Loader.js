import React from "react";

import { Card, CircularProgress } from "@material-ui/core";

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
