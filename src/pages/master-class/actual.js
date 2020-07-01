import React from "react";
import { Grid } from "@material-ui/core";
// import { dates, DateToString, TimeToString } from "../shedule/dates";
import ColorMeanings from "./cards/color-meaning";

export default function June(props) {
  return (
    <div>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={3}>
          <ColorMeanings />
        </Grid>
      </Grid>
    </div>
  );
}
