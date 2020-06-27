import React from "react";
import { Grid } from "@material-ui/core";
import { dates, DateToString, TimeToString } from "../shedule/dates";
import FutureOfFashion from "./cards/poor-fashion-cicle";
import Chanel from "./cards/chanel";
import HowToAdjust from "./cards/how-to-adjuste";
import Vintage from "./cards/vintage";
import DenimStyle from "./cards/denim-style-secret";
import ColorMeanings from "./cards/color-meaning";
import InteriorOfHeppines from "./cards/interior-of-heppines";
import LightingScenario from "./cards/lighting-scenario";

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
          <InteriorOfHeppines />
        </Grid>
        <Grid item xs={12} md={3}>
          <LightingScenario />
        </Grid>
        <Grid item xs={12} md={3}>
          <FutureOfFashion
            part="1"
            date={DateToString(dates.masterClasses.futureOfFashion.part1, true)}
            setBillingId={props.setBillingId}
            time={TimeToString(dates.masterClasses.futureOfFashion.part1)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Chanel />
        </Grid>
        <Grid item xs={12} md={3}>
          <HowToAdjust />
        </Grid>
        <Grid item xs={12} md={3}>
          <FutureOfFashion
            part="2"
            date={DateToString(dates.masterClasses.futureOfFashion.part2, true)}
            setBillingId={props.setBillingId}
            time={TimeToString(dates.masterClasses.futureOfFashion.part2)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FutureOfFashion
            part="3"
            date={DateToString(dates.masterClasses.futureOfFashion.part3, true)}
            setBillingId={props.setBillingId}
            time={TimeToString(dates.masterClasses.futureOfFashion.part3)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FutureOfFashion
            part="4"
            date={DateToString(dates.masterClasses.futureOfFashion.part4, true)}
            setBillingId={props.setBillingId}
            time={TimeToString(dates.masterClasses.futureOfFashion.part4)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ColorMeanings />
        </Grid>
        <Grid item xs={12} md={3}>
          <FutureOfFashion
            part="5"
            date={DateToString(dates.masterClasses.futureOfFashion.part5, true)}
            setBillingId={props.setBillingId}
            time={TimeToString(dates.masterClasses.futureOfFashion.part5)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FutureOfFashion
            part="6"
            date={DateToString(dates.masterClasses.futureOfFashion.part6, true)}
            setBillingId={props.setBillingId}
            time={TimeToString(dates.masterClasses.futureOfFashion.part6)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DenimStyle />
        </Grid>
        <Grid item xs={12} md={3}>
          <Vintage />
        </Grid>
      </Grid>
    </div>
  );
}
