import React from "react";

import Grid from "@material-ui/core/Grid";

export default function(props) {
  return (
    <Grid container justify="flex-start" alignItems="stretch">
      <Grid item xs={12} md={6} style={{ padding: 20, paddingTop: 0 }}>
        {props.content.left}
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20, paddingTop: 0 }}>
        {props.content.right}
      </Grid>
    </Grid>
  );
}
