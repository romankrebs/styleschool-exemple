import React from "react";
import { useMediaQuery } from "@material-ui/core";

export default function Title(props) {
  const size = useMediaQuery("(max-width: 400px)");

  var style = {
    h2: {
      fontFamily: props.font.title || "Lora",
      fontSize: "1.8em",
      color: "rgb(60,60,60)",
      textAlign: "center",
      fontWeight: 500,
      margin: 8,
      padding: 0
    },
    red: {
      fontFamily: props.font.title || "Lora",
      color: "rgb(100,0,0)",
      fontWeight: 500
    }
  };

  return (
    <div>
      {size ? (
        <p
          style={{
            fontFamily: props.font.title || "Lora",
            fontSize: "1.2em",
            color: "rgb(100,100,100)",
            fontWeight: 700,
            textAlign: "center"
          }}
        >
          {/* <span style={style.red}>11</span> месяцев&nbsp;&nbsp;
          <span style={style.red}>|&nbsp;&nbsp;120</span> занятий&nbsp;&nbsp;
          <span style={style.red}>|&nbsp;&nbsp;</span>
          Диплом&nbsp;&nbsp;
          <br /> */}
          ОЧНО&nbsp;&nbsp;
          <span style={style.red}>|</span>
          &nbsp;&nbsp;ЗАОЧНО&nbsp;&nbsp;
          <br />
          &nbsp;&nbsp;ДИСТАНЦИОННО
          <br />
          <span style={{ fontWeight: 500 }}>
            Диплом о профессиональной переподготовке установленного государством
            образца с правом деятельности в выбранной области
          </span>
        </p>
      ) : (
        <p
          style={{
            fontFamily: props.font.title || "Lora",
            fontSize: "1.3em",
            color: "rgb(100,100,100)",
            fontWeight: 700,
            textAlign: "center"
          }}
        >
          {/* <span style={style.red}>11</span> месяцев&nbsp;&nbsp;
          <span style={style.red}>|&nbsp;&nbsp;120</span> занятий&nbsp;&nbsp;
          <span style={style.red}>|&nbsp;&nbsp;</span>
          Диплом&nbsp;&nbsp;
          <br /> */}
          ОЧНО&nbsp;&nbsp;
          <span style={style.red}>|</span>
          &nbsp;&nbsp;ЗАОЧНО&nbsp;&nbsp;
          <span style={style.red}>|</span>
          &nbsp;&nbsp;ДИСТАН&shy;ЦИОННО
          <br />
          <span style={{ fontWeight: 500 }}>
            Диплом о профессиональной переподготовке установленного государством
            образца с правом деятельности в выбранной области
          </span>
        </p>
      )}
      {/* <p
        style={{
          fontFamily: "Lora",
          fontSize: "1.3em",
          color: "rgb(100,100,100)",
          fontWeight: 700,
          textAlign: "center"
        }}
      >
        БЛИЖАЙШИЙ СТАРТ &mdash; ONLINE ОБУЧЕНИЕ &mdash; с 5 ИЮНЯ
      </p> */}
    </div>
  );
}
