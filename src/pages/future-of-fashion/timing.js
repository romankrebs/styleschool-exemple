import React from "react";
import { Paper } from "@material-ui/core";
import { styles } from "./styles";

function Timing(props) {
  return (
    <div style={{ paddingBottom: "2em" }}>
      <h2 style={styles.h2}>{props.title}</h2>
      <Paper style={{ padding: "1em", background: "rgb(250,250,250)" }}>
        {props.content}
      </Paper>
    </div>
  );
}

export default Timing;
