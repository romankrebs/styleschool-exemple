import React from "react";

export default function Lists(props) {
  var style;
  style = {
    fontFamily: props.font ? props.font : "inherit",
    listStyleType: "disc",
    listStylePosition: "outside",
    color: "rgb(100,100,100)",
    ...props.style
  };
  var content = props.list.map((el, i) => {
    if (i === props.list.length - 1) {
      style = {
        ...style,
        borderBottom: "none"
      };
    }
    return (
      <li style={style} key={i}>
        {el}
      </li>
    );
  });
  return (
    <React.Fragment>
      <ol style={{ padding: 40 }}>{content}</ol>
    </React.Fragment>
  );
}
