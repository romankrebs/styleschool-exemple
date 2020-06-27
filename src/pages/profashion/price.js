import React from "react";
import Cot from "../../components/cot";
// import { Grid } from "@material-ui/core";

const font = {
  title: "Lora",
  subTitle: "Roboto",
  text: "Futura-Normal"
};

const styles = {
  h3: {
    fontFamily: font.subTitle,
    fontSize: "1.2em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    paddingTop: 12,
    paddingBottom: 12,
    margin: 0
  },
  price: {
    fontFamily: font.subTitle,
    fontSize: "1.3em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0
  },
  text: {
    fontFamily: font.text,
    fontSize: "1em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 400,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 0
  }
};

const content = {
  textButton: "Стоимость обучения очное и дистанционное отделение",
  text: (
    <div>
      <h3 style={styles.h3}>Дистанционное отделение</h3>
      <div style={styles.price}>
        15
        <sup style={{ fontSize: "0.8em" }}>000</sup> рублей в месяц
      </div>
      <div style={styles.text}>
        99
        <sup style={{ fontSize: "0.8em" }}>000</sup> рублей &ndash; полная
        стоимость
        <br />
        При единовременной оплате 10% скидка
        <br />
        Доступна банковская рассрочка на 10 месяцев без переплаты &ndash; 9
        <sup style={{ fontSize: "0.8em" }}>900</sup>
        рублей в месяц
      </div>
      <div style={{ height: 24 }} />
      <h3 style={styles.h3}>Очное отделение</h3>
      <div style={styles.price}>
        20
        <sup style={{ fontSize: "0.8em" }}>000</sup> рублей в месяц
      </div>
      <div style={styles.text}>
        125
        <sup style={{ fontSize: "0.8em" }}>000</sup> рублей &ndash; полная
        стоимость
        <br />
        При единовременной оплате 10% скидка
        <br />
        Доступна банковская рассрочка на 10 месяцев без переплаты &ndash; 12
        <sup style={{ fontSize: "0.8em" }}>500</sup>
        рублей в месяц
      </div>
    </div>
  )
};

const Price = props => {
  return (
    <div>
      <h2
        style={{
          fontFamily: font.title,
          fontSize: "1.8em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          fontWeight: 500,
          paddingTop: 24,
          paddingBottom: 24,
          margin: 0
        }}
      >
        Стоимость обучения
      </h2>
      <Cot textButton={content.textButton} text={content.text} />
    </div>
  );
};

export default Price;
