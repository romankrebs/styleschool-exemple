import React from "react";

let style = {
  fontWidth: 500,
  fontSize: "1.8em",
  color: "rgb(100,100,100)",
  textAlign: "center",
  margin: 0,
  padding: 30,
  paddingTop: 48
};

export default function Title(props) {
  return (
    <div>
      <h2
        style={{
          ...style,
          fontFamily: props.font.title ? props.font.title : "inherit"
        }}
      >
        Получите квалифицированную консультацию специалиста учебного отдела
      </h2>
      {/* <p
        style={{
          textAlign: "center",
          color: "rgb(100,100,100)",
          fontSize: "1.2em"
        }}
      >
        Ближайшая дата: 4 августа в 19:00
      </p> */}
      <p style={{ color: "rgb(100,100,100)", textAlign: "center" }}>
        Корректно заполните форму, в комментариях напишите удобное время для
        связи, цель обучения, вопросы
      </p>
    </div>
  );
}
