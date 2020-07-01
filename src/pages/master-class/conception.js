import React from "react";
import Grid from "@material-ui/core/Grid";

function Number(props) {
  return (
    <div
      style={{
        height: 64,
        width: 64,
        paddingTop: 0,
        border: "4px solid rgb(123,143,87)",
        borderRadius: "50% 50%",
        background: "transparent",
        color: "rgb(123,143,87)",
        fontFamily: "'Roboto'",
        fontSize: "40px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        boxSizing: "border-box"
      }}
    >
      {props.n}
    </div>
  );
}

function Paragraph() {
  var styles = {
    text: {
      fontFamily: "Roboto",
      fontSize: "1em",
      textAlign: "left",
      fontWeight: 400,
      background: "transparent",
      padding: 4,
      margin: 0
    },
    comment: {
      fontFamily: "Roboto",
      fontSize: "0.8em",
      textAlign: "left",
      fontWeight: 400,
      fontStyle: "italic",
      background: "transparent"
    }
  };
  return (
    <div style={{ background: "transparent" }}>
      <h2
        style={{
          fontFamily: "Roboto",
          fontSize: "1.6em",
          textAlign: "center",
          color: "rgb(80,80,80)",
          fontWeight: 700,
          background: "transparent"
        }}
      >
        Концепция подписки Современная мода и стиль
      </h2>
      <p style={styles.text}>
        Специальный проект ВШС "Современная мода и стиль" &ndash; это общее
        коммуникативное пространство для специалистов и слушателей из разных
        стран.
      </p>
      <p style={styles.text}>
        Идея проекта &ndash; дать возможность практикующим имиджмейкерам,
        стилистам, специалистам индустрии моды, бьюти-индустрии, представителям
        малого бизнеса или известных брендов высказать свою точку зрения на
        актуальные процессы модной индустрии, технологии и тенденции. А
        слушателям предоставить полезный контент и возможность диалога на
        интересующие темы.
      </p>
      <p style={styles.text}>
        В рамках проекта регулярные вебинары проводят как штатные преподаватели
        Высшей школы стилистики, так и приглашенные лекторы, которым мы
        предоставляем наше online пространство
      </p>
      <p style={styles.comment}>
        * Мнение Высшей школы стилистики может не совпадать с материалами
        лекторов
      </p>
    </div>
  );
}

function Numbers() {
  var styles = {
    title: {
      fontFamily: "Lora",
      fontSize: "1.2em",
      fontWeight: 700,
      textAlign: "center",
      color: "rgb(100,100,100)",
      margin: 0,
      padding: 4
    },
    text: {
      fontFamily: "Roboto",
      fontSize: "1em",
      fontWeight: 400,
      textAlign: "center",
      color: "rgb(100,100,100)",
      margin: 0,
      padding: 4
    },
    box: {
      background: "transparent",
      border: "1px solid rgb(200,200,200)",
      borderRadius: 4,
      padding: 20
    }
  };

  return (
    <Grid container justify="center" alignItems="stretch" spacing={3}>
      <Grid item xs={12} md={4}>
        <div style={styles.box}>
          <Number n="1" />
          <h3 style={styles.title}>Модные тенденции</h3>
          <p style={styles.text}>
            От высокой моды до стрит-стайла: как сегодня в многообразии
            тенденций выбрать актуальные вещи «для себя»
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={styles.box}>
          <Number n="2" />
          <h3 style={styles.title}>Модный ассортимент</h3>
          <p style={styles.text}>
            Модные бренды и ассортимент, правила подбора модной одежды и
            шопинг-маршруты &ndash; международный опыт
          </p>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={styles.box}>
          <Number n="3" />
          <h3 style={styles.title}>Индивидуальный стиль</h3>
          <p style={styles.text}>
            Все о модных и стильных решениях для женщин и мужчин от А до Я:
            цвет, крой, стиль, сочетания, нюансы
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default function Concept() {
  return (
    <div
      style={{
        background:
          "url(/img/modern-fashion-style/bg.jpg) top left / cover no-repeat"
      }}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          padding: 30,
          maxWidth: 1000,
          margin: "0 auto"
        }}
      >
        <Grid item xs={12} md={10}>
          <Paragraph />
        </Grid>
        <Grid item xs={12} md={12}>
          <Numbers />
        </Grid>
      </Grid>
    </div>
  );
}
