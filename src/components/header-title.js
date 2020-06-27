import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Title(props) {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <h1 style={{ textAlign: "center", ...props.styleHead }}>
          {props.head}
        </h1>
        {props.subtitle ? (
          <h2
            style={{
              ...props.styleSubTitle,
              textAlign: "center",
              paddingBottom: 40
            }}
          >
            {props.subtitle}
          </h2>
        ) : (
          <div style={{ height: "1.5em" }} />
        )}
      </Grid>
    </Grid>
  );
}
