import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Forma from "../../components/credit-form";
import ButtonReserved from "../../components/button-reserved";
import { dates, DateToString } from "../shedule/dates";

export const datas = {
  online: [
    {
      date: "с " + DateToString(dates.profashion.online) + " г.",
      link: "https://billing.styleschool.ru/event/egwziFYrmt5q6Lkuu"
    }
  ],
  ofline: [
    {
      date: "с " + DateToString(dates.profashion.ofline) + " г.",
      link: "https://billing.styleschool.ru"
    }
  ]
};

const styles = {
  h3: {
    fontFamily: "Lora",
    fontSize: "1.6em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    fontWeight: 500,
    margin: 0,
    padding: "12px 0"
  },
  h2: {
    fontFamily: "Lora",
    fontSize: "1.8em",
    color: "rgb(80,80,80)",
    textAlign: "center",
    fontWeight: 500,
    margin: 8,
    padding: "12px 0",
    paddingTop: 32
  }
};

const Button = props => {
  return (
    <div style={{ textAlign: "center" }}>
      <ButtonReserved link={props.link} />
      <div style={{ height: 12 }} />
      <Forma sum={props.sum} name={props.name} test={false} yellow />
    </div>
  );
};

const Tile = props => {
  return (
    <Paper
      style={{
        padding: 10,
        marginBottom: 10,
        marginTop: 10
      }}
    >
      <h3 style={styles.h3}>{props.head}</h3>
      <p
        style={{
          background: "rgb(240,240,240)",
          fontSzie: "1em",
          textAlign: "center"
        }}
      >
        {props.date}
      </p>
      <p
        style={{
          fontSize: "0.9em",
          textAlign: "center"
        }}
      >
        {props.price}
      </p>
      <Button sum={props.sum} name={props.name} link={props.link} />
    </Paper>
  );
};

export default function Dates() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>Ближайший набор</h2>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        {datas.online.map((d, i) => (
          <Tile
            head="Дистанционно"
            date={d.date}
            price={
              <span>
                Записаться на собеседование
                <br />
                Получить доступ к демо лекциям
                <br />
                Внести аванс 2000 рублей
              </span>
            }
            sum="99000.00"
            name="Имидж-консультант, курс профессиональной переподготовки (онлайн)"
            link={d.link}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        {datas.ofline.map((d, i) => (
          <Tile
            head="Очно"
            date={d.date}
            price={
              <span>
                Записаться на собеседование
                <br />
                Получить доступ к демо лекциям
                <br />
                Внести аванс 2000 рублей
              </span>
            }
            sum="125000.00"
            name="Имидж-консультант, курс профессиональной переподготовки (очно)"
            link={d.link}
          />
        ))}
      </Grid>
    </Grid>
  );
}
