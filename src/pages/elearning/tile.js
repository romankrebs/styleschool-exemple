import React from "react";
import { Paper } from "@material-ui/core";

export default function Tile(props) {
  return (
    <Paper style={{ padding: 12, paddingTop: 24, ...props.style }}>
      <div
        style={{
          textAlign: "center"
        }}
      >
        {props.image}
      </div>
      <h3
        style={{
          textTransform: "uppercase",
          color: "rgb(100,100,100)",
          fontSize: "1.1em",
          textAlign: "center"
        }}
      >
        {props.head}
      </h3>
      <p
        style={{
          fontSzie: "1em",
          textAlign: "center",
          color: "rgb(100,100,100)"
        }}
      >
        {props.text}
      </p>
    </Paper>
  );
}
