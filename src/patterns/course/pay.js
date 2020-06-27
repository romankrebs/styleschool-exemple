import React from "react";
import Forma from "../../components/credit-form";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

const wStyles = theme => styles;

const font = {
  title: "Roboto",
  subTitle: "Roboto",
  text: "Roboto"
};

const style = {
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
    paddingTop: "1rem",
    paddingBottom: "1rem",
    margin: 0
  }
};

const Price = props => {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <h2 className={classes.h2}>Стоимость курса</h2>
      <div>
        <div style={style.price}>
          3<sup style={{ fontSize: "0.8em" }}>900</sup> рублей
        </div>
        <p style={style.text}>
          Доступна банковская рассрочка на 10 месяцев без переплаты &ndash; 390
          рублей в месяц
        </p>
      </div>
      <Forma
        sum="3900.00"
        name="Прерафаэлиты: о том, чего не было, не будет и «можно только лишь желать»"
        test={false}
        yellow
      />
    </div>
  );
};

export default withStyles(wStyles)(Price);
