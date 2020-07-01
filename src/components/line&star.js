import React from "react";
import Line from "./line";

const LineAndStar = function(props) {
  return (
    <div>
      <Line style={props.styleLine} />
      <div
        style={{
          marginTop: -40,
          fontSize: "1.2em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          ...props.styleStarBox
        }}
      >
        <span
          style={{
            background: "rgb(255,255,255)",
            fontFamily: "Roboto",
            ...props.styleStar
          }}
        >
          &emsp;*&emsp;
        </span>
      </div>
      <div style={{ height: props.bottomSpace || 24 }} />
    </div>
  );
};

export default LineAndStar;
