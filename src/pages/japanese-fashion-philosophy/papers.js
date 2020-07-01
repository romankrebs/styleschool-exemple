import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Info(props) {
  return (
    <div style={{ padding: "2.56rem 0 2.24rem 0" }}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {props.content.map((el, key) => (
          <Grid item xs={12} md={props.size || 3} key={key}>
            <Paper
              style={{
                padding: "1rem",
                minHeight: props.height || "5rem"
              }}
            >
              <h3
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1.4rem",
                  color: "rgb(100,100,100)",
                  fontWeight: 700,
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  paddingBottom: "1.4rem"
                }}
              >
                {el.title}
              </h3>
              {el.text}
            </Paper>
          </Grid>
        ))}
        {props.string ? (
          <Grid item xs={12} md={12}>
            {props.string}
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}

export default Info;
