import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Teachers() {
  const styles = {
    image: {
      marginBottom: 30
    },
    name: {
      background: "rgba(27,125,172,1.0)",
      padding: 5,
      fontFamily: "Roboto",
      fontSize: "1.6em",
      color: "rgb(255,255,255)"
    },
    box: {
      textAlign: "center",
      padding: 20
    },
    list: {
      fontSize: "1em",
      color: "rgb(100,100,100)"
    },
    head: {
      fontFamily: "Roboto",
      fontSize: "2em",
      textAlign: "left"
    }
  };

  const teachers = {
    a: {
      name: "Валерий Чередниченко",
      text: (
        <ul>
          <li style={styles.list}>
            Кандидат экономических наук, социолог, бизнес-тренер, политтехнолог
          </li>
          <li style={styles.list}>
            Директор Института стратегических исследований и проектов
          </li>
          <li style={styles.list}>
            Заведующий кафедрой партийной школы «Единой России» в Московской
            области
          </li>
          <li style={styles.list}>
            Автор более 130 статей, монографий и методических пособий в области
            социологии, общественного мнения, политической рекламы и имиджа
          </li>
          <li style={styles.list}>
            В течение 20 лет участвовал в различных политических кампаниях по
            выборам президентов России, Украины, Монголии, Абхазии, депутатов
            Государственной Думы, мэров городов и глав районов
          </li>
        </ul>
      ),
      image: "/img/political-style/teacher02.jpg"
    },
    b: {
      name: "Мария Родина",
      text: (
        <ul>
          <li style={styles.list}>
            Кандидат политических наук, психолог, бизнес-тренер, политтехнолог
          </li>
          <li style={styles.list}>Директор фонда «Общественных инициатив»</li>
          <li style={styles.list}>
            Провела более 30 исследовательских проектов в области изучения
            политического и социального пространства
          </li>
          <li style={styles.list}>
            Разработала и реализацовала несколько десятков политических
            проектов, проектов в области политической рекламы и имиджа
          </li>
          <li style={styles.list}>
            Руководила кампаниями по выбору депутатов ГД, глав районов
            Московской области
          </li>
        </ul>
      ),
      image: "/img/political-style/teacher01.jpg"
    }
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12} style={{ paddingLeft: 20 }}>
        <h2 style={styles.head}>Ведущие курса</h2>
      </Grid>
      <Grid item xs={12} md={6} style={styles.box}>
        <img src={teachers.a.image} alt="" style={styles.image} />
        <Paper style={styles.name}>{teachers.a.name}</Paper>
        {teachers.a.text}
      </Grid>
      <Grid item xs={12} md={6} style={styles.box}>
        <img src={teachers.b.image} alt="" style={styles.image} />
        <Paper style={styles.name}>{teachers.b.name}</Paper>
        {teachers.b.text}
      </Grid>
    </Grid>
  );
}
