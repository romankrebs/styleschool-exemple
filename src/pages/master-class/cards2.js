import React from "react";
import { Grid } from "@material-ui/core";
import Smm from "./cards/smm";
import NonVerbal from "./cards/non-verbal-communications";
import PersonalBrandInNet from "./cards/personal-brand-in-net";
import Trands from "./cards/trands-trandsetter";
import PersonalBrand from "./cards/personal-brand";
import CrowdReaction from "./cards/crowd-reaction";

function Cards2(props) {
  return (
    <div style={{ paddingTop: "2em" }}>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={3}>
          <Smm setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <NonVerbal setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <PersonalBrandInNet />
        </Grid>
        <Grid item xs={12} md={3}>
          <Trands />
        </Grid>
        <Grid item xs={12} md={3}>
          <PersonalBrand />
        </Grid>
        <Grid item xs={12} md={3}>
          <CrowdReaction />
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards2;
