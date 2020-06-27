import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Note(props) {
  return (
    <div style={{ padding: 0, paddingTop: "1.6rem" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ background: "rgba(240,240,240,1)" }}
      >
        <Grid item xs={2} md={2} style={{ textAlign: "center" }}>
          <img
            src="/img/info-blue.svg"
            alt="информация"
            style={{ height: 64 }}
          />
        </Grid>
        <Grid item xs={10} md={10} style={{ padding: "1em" }}>
          {props.text}
        </Grid>
      </Grid>
    </div>
  );
}
