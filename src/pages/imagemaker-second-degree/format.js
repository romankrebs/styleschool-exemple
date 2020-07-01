import React from "react";
import { Grid } from "@material-ui/core";

import List from "../../components/list";

export default function FormatComponent(props) {
  const content = [
    {
      image: "/img/green/school.svg",
      head: "Полная программа",
      list: [
        <span>
          Полная программа обучения &mdash; <b>11</b> месяцев
        </span>,
        <span>
          <b>120</b> занятий + самостоятельная работа
        </span>,
        <span>Обязательное выполнение д/з и практики</span>,
        <span>
          <b>Диплом</b> РГСУ / ВШСДТ
        </span>
      ]
    },
    {
      image: "/img/green/certificate.svg",
      head: "Специализация",
      list: [
        <span>
          Программа обучения &mdash; <b>6</b> месяцев
        </span>,
        <span>
          <b>60</b> занятий + самостоятельная работа
        </span>,
        <span>Обязательное выполнение д/з и практики</span>,
        <span>
          <b>Диплом</b> ВШСДТ
        </span>
      ]
    },
    {
      image: "/img/green/cube.svg",
      head: "Базовый",
      list: [
        <span>
          Программа обучения &mdash; <b>3</b> месяца
        </span>,
        <span>
          <b>30</b> занятий + самостоятельная работа
        </span>,
        <span>Обязательное выполнение д/з и практики</span>,
        <span>
          <b>Сертификат</b>
        </span>
      ]
    },
    {
      image: "/img/green/monitor-dashboard.svg",
      head: "Вольный слушатель",
      list: [
        "Доступно только в дистанционном обучении",
        "Доступ к обучению сразу после оплаты",
        "Возможность выбирать отдельно интересующие модули",
        "Без требований по выполнению д/з"
      ]
    },
    {
      image: "/img/green/teach.svg",
      head: "Очное обучение",
      list: [
        "Доступно: Москва, Новосибирск, Бишкек",
        "Дневные и вечерние группы",
        "Практика ТЦ, консультации, фото",
        "Учебу курирует наставник"
      ]
    },
    {
      image: "/img/green/earth.svg",
      head: "Дистант или заочно",
      list: [
        "Доступно при подключении к интернет, учим на русском языке в любой точке мира",
        "Гибкий график обучения, обязательно соблюдение сроков сдачи практических работ",
        "В заочной форме обучения доступны 2 очные сессии"
      ]
    }
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ maxWidth: 1000 }}
    >
      <Grid item xs={12} md={12} style={{ paddingTop: 80 }}>
        <h2
          style={{
            fontFamily: props.font ? props.font.title : "Lora",
            fontSize: "1.8em",
            color: "rgb(100,0,0)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "12px 0"
          }}
        >
          Форматы обучения
        </h2>
      </Grid>
      {content.map((el, i) => (
        <Grid item xs={12} md={6} style={{ padding: 12 }} key={i}>
          <div style={{ textAlign: "center" }}>
            <img src={el.image} alt="" style={{ height: 70 }} />
          </div>
          <h3
            style={{
              fontFamily: props.font ? props.font.title : "Lora",
              fontSize: "1.8em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              fontWeight: 500,
              margin: 0,
              padding: "4px 0"
            }}
          >
            {el.head}
          </h3>
          <List
            arr={el.list}
            style={{
              fontSize: props.font ? props.font.size : "1em",
              fontFamily: props.font ? props.font.text : "inherit",
              color: "rgb(100,100,100)",
              textAlign: "left",
              fontWeight: 400
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
