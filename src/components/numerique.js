import React from "react";

export default function Numerique(props) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "rgba(240,240,240,1.0)",
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 0,
          marginTop: 0,
          boxSizing: "border-box",
          zIndex: 1,
          boxShadow: "1px 1px 3px 1px rgba(0,0,0,0.25)",
          ...props.style.box
        }}
      >
        <p
          style={{
            fontSize: "1.2em",
            color: "rgb(100,100,100)",
            padding: 0,
            paddingLeft: 60,
            paddingRight: 20,
            ...props.style.text
          }}
        >
          {props.text}
        </p>
        <div
          style={{
            backgroundColor: "rgba(240,240,240,1)",
            border: "3px solid rgb(0,100,190)",
            borderRadius: "50% 50%",
            position: "absolute",
            top: "-18px",
            marginLeft: 0,
            marginTop: 0,
            margiBottom: -48,
            textAlign: "center",
            color: "rgb(0,100,190)",
            fontSize: "1.2em",
            height: 36,
            width: 36,
            paddingTop: 5,
            zIndex: 5,
            boxSizing: "border-box",
            ...props.style.number
          }}
        >
          {props.number}
        </div>
      </div>
    </div>
  );
}
