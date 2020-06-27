import React from "react";
import { style } from "./styles";

function S() {
  return <span style={{ color: "rgb(255,125,0)" }}> | </span>;
}

export default function InFew() {
  return (
    <h3 style={{ ...style.h3, textAlign: "center" }}>
      16 академ. ч.
      <S />
      30%&nbsp;теории
      <S />
      70%&nbsp;практики
    </h3>
  );
}
