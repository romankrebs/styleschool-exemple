import React from "react";

const font = "Roboto";

const Title = props => {
  return (
    <div
      style={{
        fontWeight: 500,
        fontFamily: font,
        fontSize: "1.5em",
        textAlign: "center",
        color: "rgb(0,0,0)",
        margin: "24px 0"
      }}
    >
      Ближайшие курсы
    </div>
  );
};

export default Title;
