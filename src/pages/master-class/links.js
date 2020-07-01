import React from "react";
import { Link } from "react-router-dom";

function Links(props) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 4,
        border: "1px solid rgb(123,143,87)"
      }}
    >
      {props.external ? (
        <a href={props.link}>{props.text}</a>
      ) : (
        <Link to={props.link}>{props.text}</Link>
      )}
    </div>
  );
}

export default Links;
