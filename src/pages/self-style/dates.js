import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Button from "../../components/button-reserved";
import { dates, DateToString } from "../shedule/dates";

const Tile = function(props) {
  return (
    <Paper style={{ padding: 8 }}>
      <h3
        style={{
          font: '500 1.8em "Lora"',
          textAlign: "center",
          color: "rgb(90,90,90)",
          padding: "12px 8px",
          margin: 0
        }}
      >
        {props.title}
      </h3>
      <div
        style={{
          width: "100%",
          background: "rgb(240,240,240)",
          font: "400 1.5em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          margin: 0,
          padding: "16px 12px",
          boxSizing: "border-box"
        }}
      >
        {props.data}
      </div>
      <div style={{ padding: 12 }}>
        {props.text.map((el, i) => (
          <p
            style={{
              font: "400 1em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              margin: 0,
              padding: 0
            }}
            key={i}
          >
            {el}
          </p>
        ))}
      </div>
      <Button link={props.link} />
    </Paper>
  );
};

export default function Dates() {
  return (
    <div>
      <h2
        style={{
          font: '500 2em "Lora"',
          color: "rgb(90,90,90)",
          textAlign: "center",
          margin: 0,
          padding: 0,
          paddingTop: 48,
          paddingBottom: 24
        }}
      >
        Ближайший набор
      </h2>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={4}>
          <Tile
            title="Видео"
            data="Доступ сразу ко всем материалам курса после оплаты"
            text={[
              <span>
                Полная стоимость 5 <sup style={{ fontSize: "0.8em" }}>000</sup>{" "}
                ₽
              </span>,
              <span>Доступна рассрочка на 10&nbsp;месяцев</span>
            ]}
            link={false}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            title="Online"
            data={
              <span>
                {DateToString(dates.selfStyle.online)}
                <br />
                Доступ сразу ко всем материалам курса ,онлан-вебинары, домашнее
                задание и обратная связь по заданию
              </span>
            }
            text={[
              <span>
                Полная стоимость 19 <sup style={{ fontSize: "0.8em" }}>600</sup>{" "}
                ₽
              </span>,
              <span>Доступна рассрочка на 10&nbsp;месяцев</span>
            ]}
            link={false}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            title="Очно"
            data={
              <span>
                {DateToString(dates.selfStyle.ofline, true)}
                <br />
                Очные занятия, домашнее задание и обратная связь по заданию,
                индивидуальные консультации
              </span>
            }
            text={[
              <span>
                Полная стоимость 32 <sup style={{ fontSize: "0.8em" }}>000</sup>{" "}
                ₽
              </span>,
              <span>Доступна рассрочка на 10&nbsp;месяцев</span>
            ]}
            link={false}
          />
        </Grid>
      </Grid>
    </div>
  );
}
