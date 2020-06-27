import React from "react";
import List from "../../components/list";

export default function Conditions(props) {
  let styles = {
    head: {
      fontWidth: 500,
      fontSize: "1.8em",
      fontFamily: props.font.title || "Lora",
      color: "rgb(100,100,100)",
      textAlign: "center",
      margin: 0,
      padding: "40px 12px"
    },
    text: {
      fontWidth: 400,
      fontSize: props.font.size || "1em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: 8
    }
  };

  return (
    <div>
      <h2
        style={{
          ...styles.head,
          fontFamily: props.font.title || "Lora",
          color: "rgb(100,0,0)"
        }}
      >
        Условия зачисления на курс:
      </h2>
      <List
        arr={[
          "Забронировать место, внести аванс (100% возврат в случае отказа)",
          "Заполнить анкету, пройти собеседование с куратором курса",
          "Оформить документы для обучения"
        ]}
        style={styles.text}
      />
    </div>
  );
}
