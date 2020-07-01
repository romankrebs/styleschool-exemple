import React from "react";
import Paper from "@material-ui/core/Paper";

export default function Component(props) {
  var style = {};
  if (props.block.style !== undefined) {
    style = props.block.style;
  }
  return (
    <Paper style={style}>
      <p
        style={{
          fontSize: "2.5em",
          fontWeight: 700,
          color: "rgb(180,0,0)",
          textAlign: "center",
          ...props.message1.style
        }}
      >
        {props.message1.text}
      </p>
      <p
        style={{
          fontSize: "1.5em",
          fontWeight: 400,
          color: "rgb(100,100,100)",
          textAlign: "center",
          ...props.message2.style
        }}
      >
        {props.message2.text}
      </p>
    </Paper>
  );
}
