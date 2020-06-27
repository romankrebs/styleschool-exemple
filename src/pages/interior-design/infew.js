import React from "react";

function S() {
  return <span style={{ color: "rgb(255,125,0)" }}> | </span>;
}

export default function InFew() {
  return (
    <h3
      style={{
        textAlign: "center",
        fontSize: "1.4em",
        fontWeight: 700
      }}
    >
      3 месяца
      <S />
      24 занятия
      <S />
      96 академических часов
      <br />
      ОЧНО
      <S />
      ONLINE
    </h3>
  );
}
