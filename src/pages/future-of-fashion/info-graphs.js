import React from "react";
import { Grid } from "@material-ui/core";
import Info from "./info-paper";

function InfoGraphs(props) {
  return (
    <div style={{ padding: "2em 0" }}>
      <Grid container spacing={2} justify="center" alignItems="stretch">
        {props.content.map((el, key) => (
          <Grid item xs={12} md={props.small ? 3 : 4} key={key}>
            <Info text={el.text} title={el.title} icon={el.icon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default InfoGraphs;
