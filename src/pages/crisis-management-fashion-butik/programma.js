import React from "react";
import Program from "../../components/list-underline";

export default function Component() {
  var content = [
    "Встреча 1. Факторы, влияющие на продажи в рознице. Уникальность концепции.",
    "Встреча 2. Местоположение торговой точки. Ассортиментная и ценовая политика.",
    "Встреча 3. Использование правил и принципов мерчендайзинга для роста продаж",
    <span>
      Встреча 4. Работа с клиентами в условиях перенасыщенного рынка. Обучение
      персонала. Продвижение &ndash; устаревшие и эффективные инструменты.
    </span>,
    "В процессе: networking, успешные кейсы, обмен опытом"
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
