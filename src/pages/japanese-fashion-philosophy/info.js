import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Info(props) {
  return (
    <div style={{ padding: "2.56rem 0 2.24rem 0" }}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {props.content.map((el, key) => (
          <Grid item xs={12} md={3} key={key}>
            <Paper
              style={{
                padding: "2rem"
              }}
            >
              <Grid container alignItems="center">
                <Grid item xs={3} md={3} style={{ textAlign: "center" }}>
                  <img
                    src={el.image}
                    alt=""
                    style={{ height: el.size || 36 }}
                  />
                </Grid>
                <Grid item xs={9} md={9}>
                  <h3
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "1.4rem",
                      color: "rgb(100,100,100)",
                      fontWeight: 700,
                      padding: 0,
                      margin: 0,
                      textAlign: "center"
                    }}
                  >
                    {el.title}
                  </h3>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Info;
