import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Header = props => {
  return (
    <div
      style={{
        background:
          "url(/img/fashion-styling/black-quadrat.png) center/ cover no-repeat",
        padding: 48,
        textAlign: "center"
      }}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6} style={{}}>
          <Paper
            style={{
              background: "rgba(255,255,255,0.5)",
              padding: 48
            }}
          >
            <h1
              style={{
                color: "rgb(0,0,0)",
                fontSize: "2em",
                fontWeight: 600,
                textAlign: "center",
                margin: 0,
                padding: "24pcx 0"
              }}
            >
              {props.title}
            </h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
