import React from "react";

export default function Line(props) {
  return (
    <div
      style={{
        height: 1,
        width: "80%",
        background:
          "linear-gradient(to left, transparent 0%, rgb(100,100,100) 20%, rgb(100,100,100) 80%, transparent 100%)",
        margin: "30px auto",
        ...props.style
      }}
    />
  );
}
