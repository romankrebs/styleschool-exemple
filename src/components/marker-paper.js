import React from "react";
import Paper from "@material-ui/core/Paper";

// import Button from "./button0";

export default function Component(props) {
  const styleHead = {
    fontSize: "1.5em",
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "rgb(80,80,80)",
    ...props.head.style
  };
  const styleMarker = {
    background: "rgba(200,200,200,1)",
    fontSize: "1.3em",
    color: "rgb(80,80,80)",
    ...props.marker.style
  };
  const styleText = {
    fontSize: "1.2em",
    color: "rgb(80,80,80)",
    ...props.text.style
  };

  return (
    <Paper style={props.block.style}>
      <h3 style={styleHead}>{props.head.content}</h3>
      <p style={styleMarker}>{props.marker.content}</p>
      <p style={styleText}>{props.text.content}</p>
    </Paper>
  );
}
