import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "../../components/list";

const C = function() {
  return (
    <span style={{ color: "rgb(80,0,0)" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  );
};

const Color = function(props) {
  return <span style={{ color: "rgb(100,0,0)" }}>{props.t}</span>;
};

export default function About() {
  var styles = {
    head: {
      fontFamily: "Lora",
      fontSize: "1.8em",
      color: "rgb(60,60,60)",
      fontWeight: 500,
      textAlign: "center"
    },
    subtitle: {
      fontSize: "1.2em",
      color: "rgb(100,100,100)",
      fontWeight: 700,
      textAlign: "center"
    },
    text: {
      fontSize: "1em",
      color: "rgb(100,100,100)",
      fontWeight: 400,
      textAlign: "left"
    }
  };

  return (
    <div>
      <h1 style={styles.head}>
        Имидж-консультант &ndash; консультант по моде и стилю
      </h1>
      <p style={styles.subtitle}>
        6 месяцев
        <C />
        60 занятий
        <C />
        254 академических часа
        <br />
        Очно
        <C />
        Дистанционно
        <C />
        <Color t="Диплом" /> о&nbsp;профпереподготовке
      </p>
      <Grid container justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={6}>
          <h3
            style={{
              ...styles.subtitle,
              color: "rgb(100,0,0)",
              textAlign: "left"
            }}
          >
            Для кого
          </h3>
          <p style={{ ...styles.text, paddingLeft: 12 }}>
            Начинающим эта программа поможет найти свой путь в мире моды,
            сделать важный шаг к воплощению мечты в реальность.
          </p>
          <p style={{ ...styles.text, paddingLeft: 12 }}>
            <b>Важно:</b> по итогам обучения Вы получите диплом установленного
            государством образца с правом деятельности в изученной области.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3
            style={{
              ...styles.subtitle,
              color: "rgb(100,0,0)",
              textAlign: "left"
            }}
          >
            Оплата обучения
          </h3>
          <List
            arr={[
              "Оплата обучения в рассрочку на 10 месяцев",
              "Дистанционное обучение от 9.9 тыс.руб. в месяц",
              "Очное обучение от 15 тыс.руб. в месяц",
              "Скидка при единовременной оплате"
            ]}
            style={{ ...styles.text, padding: "4px 0" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
