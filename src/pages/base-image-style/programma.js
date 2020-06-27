import React from "react";
import Program from "../../components/list-underline";

export default function Component() {
  var content = [
    "КОЛОРИСТИКА. ЦВЕТОВОЙ АНАЛИЗ ВНЕШНОСТИ",
    "ТИПОЛОГИЯ ФИГУР. ВИЗУАЛЬНАЯ КОРРЕКЦИЯ ФИГУР",
    "СТИЛИ В ОДЕЖДЕ. ИНДИВИДУАЛЬНЫЙ И ДЕЛОВОЙ СТИЛЬ",
    "ТИПЫ ФОРМИРОВАНИЯ РАЦИОНАЛЬНОГО ГАРДЕРОБА",
    "ПРАКТИКА В ТОРГОВЫХ ЦЕНТРАХ, ШОУРУМАХ",
    "ПРАКТИКА СОЗДАНИЯ ПЕРСОНАЛЬНОГО STYLEBOOK",
    "DIGITAL КОММУНИКАЦИИ В FACEBOOK, INSTAGRAMM"
  ];
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "left" }}>Программа курса</h2>
      <Program
        list={content}
        style={{
          fontSize: "1.2em",
          borderBottom: "1px solid rgb(100,100,100)",
          padding: 20,
          listStyleType: "none"
        }}
      />
    </React.Fragment>
  );
}
