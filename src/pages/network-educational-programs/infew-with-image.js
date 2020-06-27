import React from "react";
import { Grid, Paper } from "@material-ui/core";
// import styles from "../../components/styles-for-types";

const Tile = function(props) {
  return (
    <div>
      <Grid container justify="space-between" alignItems="stretch" spacing={2}>
        {props.content.map((d, i) => (
          <Grid item xs={12} md={props.size ? props.size : 3}>
            <Paper>
              <div
                style={{
                  textAling: "center"
                }}
              >
                <img src={d.image} alt="" style={{ maxWidth: "100%" }} />
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "1em",
                  fontWeight: 400,
                  color: "rgb(100,100,100)",
                  padding: "1em 0"
                }}
              >
                {d.text}
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tile;
