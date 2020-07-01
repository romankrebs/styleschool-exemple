import React from "react";
import { Grid } from "@material-ui/core";
import Startup from "./cards/startup";
import Communication from "./cards/busines-communication";
import Ip from "./cards/marketing-ip";
import Presentation from "./cards/presentation";

export default function Business(props) {
  let styles = {
    head: {
      font: '700 2em "Roboto"',
      textAlign: "center",
      padding: 8,
      margin: 0,
      marginTop: 80,
      color: "rgb(100,100,100)"
    }
  };

  return (
    <div>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>Бизнес блок</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Startup setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Communication setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Ip setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Presentation setBillingId={props.setBillingId} />
        </Grid>
      </Grid>
    </div>
  );
}
