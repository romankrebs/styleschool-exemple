import React from "react";
import List from "../../components/list";

export default function Conditions(props) {
  let styles = {
    head: {
      fontWeight: 700,
      fontSize: "1.8em",
      fontFamily: "Roboto",
      color: "rgb(100,100,100)",
      textAlign: "left"
    },
    text: {
      fontWidth: 400,
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      margin: 0,
      padding: 8
    }
  };

  return (
    <div>
      <h2 style={styles.head}>Условия зачисления на курс:</h2>
      <List
        arr={[
          "Забронировать место, внести аванс 900 руб. (100% возврат в случае отказа)",
          "После бронирования места можно пройти пробные занятия",
          "Оформить документы для обучения"
        ]}
        style={styles.text}
      />
    </div>
  );
}
