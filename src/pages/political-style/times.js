import React from "react";

function S() {
  return (
    <span
      style={{
        color: "rgb(123,143,87)",
        fontSize: "1.4em",
        fontFamily: "Roboto",
        fontWeight: 700
      }}
    >
      {" "}
      |{" "}
    </span>
  );
}

export default function Times() {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        fontSize: "1.4em",
        fontWeight: 700,
        color: "rgb(100,100,100)",
        textAlign: "center"
      }}
    >
      3 месяца
      <S />
      24 занятия
      <S />
      96 академических часов
    </div>
  );
}
