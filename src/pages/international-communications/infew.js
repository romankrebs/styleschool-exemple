import React from "react";
import { styles } from "./styles";

function S() {
  return <span style={{ color: "rgb(255,125,0)" }}> | </span>;
}

export default function InFew() {
  return (
    <h3 style={{ ...styles.h3, textAlign: "center" }}>
      3 месяца
      <S />
      24 занятия
      <S />
      72 академических часа
      <S />
      30% теории
      <S />
      70% практики
      <S />
      Документ о повышении квалификации
    </h3>
  );
}
