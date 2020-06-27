import React from "react";

export default function Paragraph(props) {
  var style = {
    padding: "5px 0",
    fontFamily: "Roboto",
    fontSize: "1em",
    color: "rgb(100,100,100)",
    fontWeight: 400,
    textAlign: "left",
    margin: 0
  };
  return (
    <div>
      {props.content.map((el, i) => (
        <p style={style} key={i}>
          {el}
        </p>
      ))}
    </div>
  );
}
