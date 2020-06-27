import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";
import { Link } from "react-router-dom";

function Teacher(props) {
  return (
    <div>
      <h2 style={styles.h2}>{props.title}</h2>
      <Grid container justify="center">
        <Grid item xs={12} md={5}>
          <p style={styles.p}>{props.text}</p>
        </Grid>
        <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
          <Link to={props.link}>
            <img
              src={props.image}
              alt=""
              style={{
                borderRadius: "50%",
                height: 150
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Teacher;
