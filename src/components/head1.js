import React from "react";

export default function Head1(props) {
  var style = {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "1.6em",
    color: "rgb(100,100,100)",
    fontWeight: 700,
    ...props.style
  };
  return <h2 style={style}>{props.content}</h2>;
}
