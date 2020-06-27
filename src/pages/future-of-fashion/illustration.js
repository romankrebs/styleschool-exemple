import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";

function Illustration(props) {
  return (
    <div style={{ paddingTop: props.topSpace ? "2em" : 0 }}>
      {props.imageLeft ? (
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={6}>
            <div style={styles.imageBox}>
              <img
                src={props.image}
                alt={props.imageComment}
                style={props.styleImage ? props.styleImage : styles.image}
              />
              <p style={styles.pIll}>{props.imageComment}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {props.text}
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={6}>
            {props.text}
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={styles.imageBox}>
              <img
                src={props.image}
                alt={props.imageComment}
                style={styles.image}
              />
              <p style={styles.pIll}>{props.imageComment}</p>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Illustration;
