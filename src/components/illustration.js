import React from "react";

export default function Illustration(props) {
  return (
    <figure
      style={{
        textAlign: "center",
        padding: 0,
        margin: 0,
        ...props.style
      }}
    >
      <img
        src={props.image}
        alt=""
        style={{ maxWidth: "100%", margin: 0, ...props.styleImage }}
      />
      <figcaption
        style={{
          fontFamily: "Lora",
          fontSize: "0.7em",
          fontStyle: "italic",
          color: props.color ? props.color : "rgb(255,0,0)",
          textAlign: "center",
          ...props.styleText
        }}
      >
        {props.text}
      </figcaption>
    </figure>
  );
}
