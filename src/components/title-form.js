import React from "react";

export default function Title(props) {
  return (
    <h2
      style={{
        font: "700 1.8em",
        color: "rgb(100,100,100)",
        textAlign: "center",
        padding: "40px 0 24px 0",
        margin: 0,
        ...props.style
      }}
    >
      {props.text ? props.text : "Оставьте заявку на обучение"}
    </h2>
  );
}
