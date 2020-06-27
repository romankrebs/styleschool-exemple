import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Button from "../../components/button-reserved";

const Dates = props => {
  const style = {
    title: {
      fontSize: "1.3em",
      textAlign: "center",
      fontWeight: 700,
      color: "rgb(100,100,100)"
    },
    text: {
      fontSize: "1em",
      textAlign: "center",
      fontWeight: 400,
      color: "rgb(100,100,100)"
    },
    date: {
      fontSize: "1em",
      textAlign: "center",
      fontWeight: 400,
      color: "rgb(80,80,80)",
      background: "rgb(245,245,245)"
    },
    button: {
      background: "rgb(123,143,87)",
      color: "rgb(255,255,255)",
      padding: 4,
      fontSize: "1em",
      borderRadius: 4,
      width: "fit-content",
      margin: "0 auto"
    }
  };

  const Tile = props => {
    return (
      <div>
        <Paper style={{ padding: 12 }}>
          <h2 style={style.title}>{props.title}</h2>
          <p style={style.date}>{props.date}</p>
          {props.content.map((el, i) => (
            <p style={style.text}>{el}</p>
          ))}
          {props.link ? <Button link={props.link} /> : null}
        </Paper>
      </div>
    );
  };

  return (
    <div style={{ padding: 10 }}>
      <h2
        style={{
          fontSize: "1.6em",
          fontWeight: 700,
          color: "rgb(100,100,100)",
          textAlign: "center"
        }}
      >
        Ближайший набор
      </h2>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Tile
            title="Очно"
            date="5 ноября 2019"
            content={[
              <span>
                Полная стоимость 19 <sup>600</sup> ₽
              </span>,
              "Доступна рассрочка на 10 месяцев",
              "Скидка при раннем бронировании"
            ]}
            link={false}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            title="Online"
            date="6 ноября 2019"
            content={[
              <span>
                Полная стоимость 9 <sup>600</sup> ₽
              </span>,
              "Доступна рассрочка на 10 месяцев",
              "Скидка при раннем бронировании"
            ]}
            link={false}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            title="Тур в Париж"
            date="даты по согласованию"
            content={[
              <span>
                Полная стоимость 160 <sup>000</sup> ₽
              </span>,
              "Доступна рассрочка на 10 месяцев"
            ]}
            link={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dates;
